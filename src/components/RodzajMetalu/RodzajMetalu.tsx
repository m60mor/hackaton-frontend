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
    <div className='form-major'>
      <div className='form-minor'>
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
      </div>
        <div className='form-minor'>
          {typy[rodzajMetalu].map((typ, index) => (
              <div className='radio radio-podtype'>
                <label htmlFor={`${index}`}>{typ}
                  <input type='radio' value={typ} checked={rodzajMetaluDokładny === typ} onChange={handleRodzajChange}></input>
                </label>
              </div>
          ))}
        </div>
      </div>
  )
}
