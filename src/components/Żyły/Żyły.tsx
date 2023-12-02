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
    <div>Liczba żył obciążonych</div>
    <div className='form-strands-elements'>
      {żyły.map((typ, index) => (
          <div className="radio" key={index}>
              <label className="text-tiny" htmlFor={`${index}`}>{typ}
                <input
                    type="radio"
                    value={index}
                    checked={izolacja === index}
                    onChange={handleOptionChange}
                />
              </label>
          </div>
      ))}
    </div>
    <div>Przekrój żyły</div>
    <label htmlFor="przekrój"></label>
    <input type="number" id='przekrój' value={przekrój} onChange={handleTextareaChange}/>
</div>
  )
}
