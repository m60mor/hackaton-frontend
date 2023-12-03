import './Homepage.scss'
import Header from '../../components/header/Header';
import RodzajMetalu from '../../components/RodzajMetalu/RodzajMetalu';
import Izolacja from '../../components/Izolacja/Izolacja';
import Żyły from '../../components/Żyły/Żyły';
import Moc from '../../components/Moc/Moc';
import Instalacja from '../../components/Instalacja/Instalacja';
import Temperatura from '../../components/Temperatura/Temperatura';
import Rezystencja from '../../components/Rezystencja/Rezystencja';
import { useState, useEffect} from 'react';
import ShowResults from '../../components/ShowResults/ShowResults';

export default function Homepage() {
    const [IsCalculated, setIsCalculated] = useState<Boolean>(false)
    const [data, setData] = useState<(string | number)[]>(['YDY', 'a', 'a', 0, 'A1', 0, 0.5, 0])
    const [dataArray, setDataArray] = useState<(string | number)[]>(['YDY', 'a', 'a', 0, 'A1', 30, 0.5, 0]);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsCalculated(true)
        let metalType = "a"
        if (dataArray[0] =="YAKXS") {
            metalType = "b"
        }

        const newData = await (await fetch('http://ec2-54-227-117-32.compute-1.amazonaws.com:8080/filter-cables', 
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "material": metalType,
                "isolation": dataArray[1],
                "coresLoaded": dataArray[2],
                "typeOfInstalation": dataArray[4].toString(),
                "temperature": dataArray[5].toString(),
                "soilResistivity": dataArray[6].toString(),
                "power": dataArray[7].toString(),
                "cos": 0.8
              })
        })).json()
        setData(newData)
    }
    function handleDataChange(value: string | number, index: number) {
        const newDataArray = [...dataArray];
        newDataArray[index] = value;
        setDataArray(newDataArray);
    }

    function returnToSelection() {
        setDataArray((['YDY', 'a', 'a', 0, 'A1', 0, 0.5, 0]));
        setIsCalculated(!IsCalculated);
    }

    return( 
        <>
        <Header/>
        <div className="main">
        {!IsCalculated ?
            <form className='form' onSubmit={handleSubmit}>
                <RodzajMetalu handleDataChange={handleDataChange}/>
                <Izolacja handleDataChange={handleDataChange}/>
                <Żyły handleDataChange={handleDataChange}/>
                <Moc handleDataChange={handleDataChange} dataArray={dataArray}/>
                <Instalacja handleDataChange={handleDataChange} dataArray={dataArray}/>
                <Temperatura handleDataChange={handleDataChange} dataArray={dataArray}/>
                <Rezystencja handleDataChange={handleDataChange}/>
                <button className='form-submit' type='submit' >Wyszukaj</button>
            </form> :
        <div className="response">
            <ShowResults data={data}/>
            <button className="form-submit" onClick={returnToSelection}>Wróć</button>
        </div>
        }
        </div>
        </>
    );
}