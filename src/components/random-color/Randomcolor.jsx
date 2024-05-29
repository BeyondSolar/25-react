import { useState, useEffect } from 'react';

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000')

    function randomGenerator(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomGenerator(hex.length)];
        }

        setColor(hexColor);
    }

    function handleCreateRandomRGBColor() {
        const r = randomGenerator(256);
        const g = randomGenerator(256);
        const b = randomGenerator(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        if (typeOfColor === "rgb") handleCreateRandomRGBColor();
        else handleCreateRandomHexColor();
    }, [typeOfColor]);

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen text-white space-x-2" style={{ background: color }}>
            <div className='space-x-2'>
                <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
                <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
                <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRGBColor}>Generate Random Color</button>               
            </div>
            <div className='flex flex-col items-center'>
                <h1>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h1>
                <h1>{color}</h1>
            </div>

        </div>
    )
}


export default RandomColor;