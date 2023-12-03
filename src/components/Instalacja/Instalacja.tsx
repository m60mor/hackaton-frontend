import React, { ReactElement, useState } from 'react'
interface Iprops {
  handleDataChange: (value: string | number, index: number) => void,
  dataArray: (string | number)[]
}
export default function Instalacja({
  handleDataChange,
  dataArray
}: Iprops): ReactElement {
    const [indexMiejsca, setIndexMiejsca] = useState<number>(0)
    const miejsca = ['w ścianie izolowanej cieplnie', 'w rurze instalacyjnej ściana/mur', 'w powietrzu', 'w ziemi']
    const [indexDokładneMiejsce, setIndexDokładneMiejsce] = useState<number>(0)
    // const [typ, setTyp] = useState("")
    const dokładneMiejsce = [['bezpośrednio', 'w rurze instalacyjnej'], ['dla kabli jednożyłowych','dla kabli i przewodów wielożyłowych'], ['dla kabli jednożyłowych','dla kabli i przewodów wielożyłowych'], ['w rurze', 'bezpośrednio w ziemi']];
    const kod = [['A1', 'A2'], ['B1', 'B2'], ['E', 'F'], ['D1', 'D2']];
    const handleMiejsceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndexMiejsca(+event.target.value);
        if (+event.target.value === 1 && (dataArray[2] === 'a' || dataArray[2] === 'b')){
          setIndexDokładneMiejsce(1);
          handleDataChange(kod[+event.target.value][1], 4);
        } else if (+event.target.value === 2 && dataArray[2] === 'c' ){
          setIndexDokładneMiejsce(1);
          handleDataChange(kod[+event.target.value][1], 4);
        }
        else {
        setIndexDokładneMiejsce(0);
        handleDataChange(kod[+event.target.value][0], 4);}
      };
    const handleDokładneMiejsceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndexDokładneMiejsce(+event.target.value);
        handleDataChange(kod[indexMiejsca][+event.target.value], 4);
    };
  return (
    <div className='form-major'>
      <h2>Sposób instalacji</h2>
    <div className="form-minor">

        {miejsca.map((typ, index) => (
            <div className='radio' key={index}>
            <label className='text-small' htmlFor={`${index}`}>{typ}
              <input type='radio' value={index} checked={indexMiejsca === index} onChange={handleMiejsceChange}></input>
            </label>
            </div>
        ))}
    </div>
    <div className='form-minor'>
        {dokładneMiejsce[indexMiejsca].map((typ, index) => (
            <div className='radio' key={index}>
            <label className='text-small' htmlFor={`${index}`}>{typ}
              <input type='radio' value={index} checked={indexDokładneMiejsce === index} onChange={handleDokładneMiejsceChange}
              disabled={dataArray[2] === 'c' && kod[indexMiejsca][index] === 'B2' ||
                      dataArray[2] === 'c' && kod[indexMiejsca][index] === 'E' ||
                      (dataArray[2] === 'a' || dataArray[2] === 'b') && kod[indexMiejsca][index] === 'B1' ||
                      (dataArray[2] === 'a' || dataArray[2] === 'b') && kod[indexMiejsca][index] === 'F'}
              ></input>
            </label>
            </div>
        ))}
    </div>
    </div>
  )
}
