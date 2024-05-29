import data from './data';
import { useState } from 'react';

const Accordian = () => {

    const [selected, setSelected] = useState(null);
    const [enableMulti, setEnableMulti] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentID) {
        setSelected(getCurrentID === selected ? null : getCurrentID);
    }

    function handleMultiSelection(getCurrentID) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentID);

        if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentID);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMultiple);
    }

    return (
        <div className="flex flex-col justify-center items-center border-8">
            <button onClick={() => setEnableMulti(!enableMulti)}>Enable Multi Selection</button>
            <div className='border-black border-4'>
                {
                    data && data.length > 0 ? 
                    data.map((dataItem) => (
                        <div key={dataItem.id}>
                            <div 
                                onClick={enableMulti ? 
                                    () => handleMultiSelection(dataItem.id) 
                                    : 
                                    () => handleSingleSelection(dataItem.id)
                                } 
                                className="flex flex-col justify-center items-center border-4"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMulti ? 
                                multiple.indexOf(dataItem.id) !== -1 && 
                                <div className='content'>
                                    {dataItem.statement}
                                </div>
                                :
                                selected === dataItem.id && 
                                <div className='content'>
                                    {dataItem.statement}
                                </div>
                            }
                        </div>
                    )) 
                    : 
                    <div>Data not available</div>
                }
            </div>
        </div>
    );
}

export default Accordian;
