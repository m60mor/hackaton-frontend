import './Homepage.scss'
import Header from '../../components/header/Header';
import RodzajMetalu from '../../components/RodzajMetalu/RodzajMetalu';
import Izolacja from '../../components/Izolacja/Izolacja';
import Żyły from '../../components/Żyły/Żyły';
import Instalacja from '../../components/Instalacja/Instalacja';
import Temperatura from '../../components/Temperatura/Temperatura';
import Rezystencja from '../../components/Rezystencja/Rezystencja';
import { useState } from 'react';
import ShowResults from '../../components/ShowResults/ShowResults';

export default function Homepage() {
    const [IsCalculated, setIsCalculated] = useState<Boolean>(false)
    const [data, setData] = useState<(string | number)[]>(['YDY', 'a', 'a', 0, 'A1', 0, 0.5])
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsCalculated(true);
        setData(dataArray);
    }
    const dataArray: (string | number)[] = ['YDY', 'a', 'a', 0, 'A1', 0, 0.5]
    function handleDataChange(value: string | number, index: number) {
        dataArray[index] = value;
        setData(dataArray);
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
                <Instalacja handleDataChange={handleDataChange} dataArray={data}/>
                <Temperatura handleDataChange={handleDataChange} dataArray={data}/>
                <Rezystencja handleDataChange={handleDataChange}/>
                <button className='form-submit' type='submit' >Wyszukaj</button>
            </form> :
        <ShowResults data={data}/>}
        </div>
        </>
    );
}