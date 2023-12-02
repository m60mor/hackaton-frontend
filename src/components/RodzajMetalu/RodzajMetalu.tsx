import React, { useState } from 'react'

export default function RodzajMetalu() {
    const [rodzajMetalu, setRodzajMetalu] = useState<number>(0)
    const [rodzajMetaluDokładny, setRodzajMetaluDokładny] = useState<string>('')
    // const [typ, setTyp] = useState("")
    const typy = [['YDY', 'YDYp', 'YKY', 'YKXS', 'N2XH'], ['YAKXS']];
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRodzajMetalu(+event.target.value);
      };
    const handleRodzajChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRodzajMetaluDokładny(event.target.value);
    };
  return (
    <>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={0}
              checked={rodzajMetalu === 0}
              onChange={handleOptionChange}
              />
            Miedź
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={1}
              checked={rodzajMetalu === 1}
              onChange={handleOptionChange}
            />
            Aluminium
          </label>
        </div>
        {typy[rodzajMetalu].map((typ, index) => (
            <>
            <label htmlFor={`${index}`}>{typ}</label>
            <input type='radio' value={typ} checked={rodzajMetaluDokładny === typ} onChange={handleRodzajChange}></input>
            </>
        ))}
        </>
  )
}
