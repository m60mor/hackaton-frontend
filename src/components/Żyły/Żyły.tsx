import React, { ReactElement, useState } from 'react'
interface Iprops {
  handleDataChange: (value: string | number, index: number) => void
}
export default function Żyły({
  handleDataChange
}: Iprops): ReactElement {
    const [izolacja, setIzolacja] = useState<number>(0);
    const żyły = ["układ jednofazowy (dwie żyły obciążone)",
		"układ trójfazowy wielożyłowy (trzy żyły obciążone) ",
		"układ trójfazowy jednożyłowy (trzy żyły obciążone)" ];
    const [przekrój, setPrzekrój] = useState<number>(0);

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIzolacja(+event.target.value);
        handleDataChange(String.fromCharCode(97 + +event.target.value), 2);
    };
    function handleTextareaChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setPrzekrój(+event.target.value);
        handleDataChange(+event.target.value, 3);
    }

  return (
    <div className='form-major form-strands'>
    <h2>Liczba żył obciążonych</h2>
    <div className='form-minor'>
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
</div>
  )
}
