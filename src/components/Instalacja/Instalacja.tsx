import React, { useState } from 'react'

export default function Instalacja() {
    const [indexMiejsca, setIndexMiejsca] = useState<number>(0)
    const miejsca = ['w ścianie izolowanej cieplnie', 'w rurze instalacyjnej na ścianie/murze', 'w powietrzu', 'w ziemi']
    const [indexDokładneMiejsce, setIndexDokładneMiejsce] = useState<number>(0)
    // const [typ, setTyp] = useState("")
    const dokładneMiejsce = [['bezpośrednio', 'w rurze instalacyjnej'], ['dla kabli jednożyłowych','dla kabli i przewodów wielożyłowych'], ['dla kabli jednożyłowych','dla kabli i przewodów wielożyłowych'], ['w rurze', 'bezpośrednio w ziemi']];
    const handleMiejsceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndexMiejsca(+event.target.value);
      };
    const handleDokładneMiejsceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndexDokładneMiejsce(+event.target.value);
    };
  return (
    <>
    <div className="form-instalation">

        {miejsca.map((typ, index) => (
            <>
            <label htmlFor={`${index}`}>{typ}</label>
            <input type='radio' value={index} checked={indexMiejsca === index} onChange={handleMiejsceChange}></input>
            </>
        ))}
        </div>

        {dokładneMiejsce[indexMiejsca].map((typ, index) => (
            <>
            <label htmlFor={`${index}`}>{typ}</label>
            <input type='radio' value={index} checked={indexDokładneMiejsce === index} onChange={handleDokładneMiejsceChange}></input>
            </>
        ))}
    </>
  )
}
