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
    const [data, setData] = useState<any>(null)
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsCalculated(true)
        const data = await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json()
        setData(dataArray)
    }
    // ['rodzajMetalu', 'izolacja', 'żyły','przekrój', 'instalacja', 'temperatura', 'rezystencja']
    const dataArray: (string | number)[] = ['YDY', 'a', 'a', 0, 'A1', 0, 0.5]
    function handleDataChange(value: string | number, index: number) {
        dataArray[index] = value;
        console.log(dataArray)
    }
    return( 
        <>
        <Header/>
        <div className='decor-cable1'>
            <div className='decor-cable2'>
                <div className='decor-cable3'></div>
            </div>
        </div>
        <div className='decor-rect1'></div>
        <div className='decor-rect2'></div>
        <div className="main">
            <form onSubmit={handleSubmit}>
                <RodzajMetalu handleDataChange={handleDataChange}/>
                <Izolacja handleDataChange={handleDataChange}/>
                <Żyły handleDataChange={handleDataChange}/>
                <Instalacja handleDataChange={handleDataChange}/>
                <Temperatura handleDataChange={handleDataChange}/>
                <Rezystencja handleDataChange={handleDataChange}/>
                <button className='form-submit' type='submit' >Wyszukaj</button>
            </form>
        </div>
        {IsCalculated ? <ShowResults data={data}/> : <></>}
        </>
    );
}