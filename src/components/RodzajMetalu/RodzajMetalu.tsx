import React, { useState } from 'react'

export default function RodzajMetalu() {
    const [rodzajMetalu, setRodzajMetalu] = useState<number>(0)
    // const [typ, setTyp] = useState("")
    const typy = [['YDY', 'YDYp', 'YKY', 'YKXS', 'N2XH'], ['YAKXS']];
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRodzajMetalu(+event.target.value);
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
        <select name="typ" id="typ">
            {typy[rodzajMetalu].map((typ, index) => (
                <option key={index} value={typ}>{typ}</option>
            ))}
        </select>
        </>
  )
}
