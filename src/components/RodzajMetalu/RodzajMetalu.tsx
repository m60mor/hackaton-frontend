import React, { ReactElement, useState } from 'react'

interface Iprops {
  handleDataChange: (value: string | number, index: number) => void
}
export default function RodzajMetalu({
  handleDataChange
}: Iprops): ReactElement {
    const [rodzajMetalu, setRodzajMetalu] = useState<number>(0)
    const [rodzajMetaluDokładny, setRodzajMetaluDokładny] = useState<string>('')
    // const [typ, setTyp] = useState("")
    const typy = [['YDY', 'YDYp', 'YKY', 'YKXS', 'N2XH'], ['YAKXS']];
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRodzajMetalu(+event.target.value);
        setRodzajMetaluDokładny(typy[+event.target.value][0]);
        handleDataChange(typy[+event.target.value][0], 0);
      };
    const handleRodzajChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRodzajMetaluDokładny(event.target.value);
        handleDataChange(event.target.value, 0);
    };
  return (
    <div className='form-major'>
      <h2>Rodzaj metalu żyły przewodzącej</h2>
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
              <div className='radio radio-podtype' key={index}>
                <label htmlFor={`${index}`}>{typ}
                  <input type='radio' value={typ} checked={rodzajMetaluDokładny === typ} onChange={handleRodzajChange}></input>
                </label>
              </div>
          ))}
        </div>
      </div>
  )
}
