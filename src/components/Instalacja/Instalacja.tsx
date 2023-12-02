import React, { ReactElement, useState } from 'react'
interface Iprops {
  handleDataChange: (value: string | number, index: number) => void
}
export default function Instalacja({
  handleDataChange
}: Iprops): ReactElement {
    const [indexMiejsca, setIndexMiejsca] = useState<number>(0)
    const miejsca = ['w ścianie izolowanej cieplnie', 'w rurze instalacyjnej na ścianie/murze', 'w powietrzu', 'w ziemi']
    const [indexDokładneMiejsce, setIndexDokładneMiejsce] = useState<number>(0)
    // const [typ, setTyp] = useState("")
    const dokładneMiejsce = [['bezpośrednio', 'w rurze instalacyjnej'], ['dla kabli jednożyłowych','dla kabli i przewodów wielożyłowych'], ['dla kabli jednożyłowych','dla kabli i przewodów wielożyłowych'], ['w rurze', 'bezpośrednio w ziemi']];
    const kod = [['A1', 'A2'], ['B1', 'B2'], ['E', 'F'], ['D1', 'D2']];
    const handleMiejsceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndexMiejsca(+event.target.value);
        setIndexDokładneMiejsce(0);
        handleDataChange(kod[+event.target.value][0], 4);
      };
    const handleDokładneMiejsceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndexDokładneMiejsce(+event.target.value);
        handleDataChange(kod[indexMiejsca][+event.target.value], 4);
    };
  return (
    <>
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
              <input type='radio' value={index} checked={indexDokładneMiejsce === index} onChange={handleDokładneMiejsceChange}></input>
            </label>
            </div>
        ))}
    </div>
    </>
  )
}
