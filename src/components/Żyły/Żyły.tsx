import React, { useState } from 'react'

export default function Żyły() {
    const [izolacja, setIzolacja] = useState<number>(0);
    const żyły = ["układ jednofazowy (dwie żyły obciążone)",
		"układ trójfazowy wielożyłowy (trzy żyły obciążone) ",
		"układ trójfazowy jednożyłowy (trzy żyły obciążone)" ];
    const [przekrój, setPrzekrój] = useState<number>(0);

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIzolacja(+event.target.value);
    };
    function handleTextareaChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setPrzekrój(+event.target.value);
    }

  return (
    <div className='form-strands'>
    Liczba żył obciążonych
    {żyły.map((typ, index) => (
        <div key={index}>
            <label htmlFor={`${index}`}>{typ}</label>
            <input
                type="radio"
                value={index}
                checked={izolacja === index}
                onChange={handleOptionChange}
            />
        </div>
    ))}
    Przekrój żyły
    <label htmlFor="przekrój"></label>
    <input type="number" id='przekrój' value={przekrój} onChange={handleTextareaChange}/>
</div>
  )
}
