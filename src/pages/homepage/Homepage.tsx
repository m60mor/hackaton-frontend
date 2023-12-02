import './Homepage.css'
import Header from '../../components/header/Header';
import RodzajMetalu from '../../components/RodzajMetalu/RodzajMetalu';
import Izolacja from '../../components/Izolacja/Izolacja';
import Żyły from '../../components/Żyły/Żyły';
import Instalacja from '../../components/Instalacja/Instalacja';
import Temperatura from '../../components/Temperatura/Temperatura';
import Rezystencja from '../../components/Rezystencja/Rezystencja';
import { useState } from 'react';

export default function Homepage() {
    const [IsCalculated, setIsCalculated] = useState<Boolean>(false)
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsCalculated(true)
        const data = await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json()
        console.log(data)
    }
    return( 
        <>
        <Header/>
        <div className="main">
            <form onSubmit={handleSubmit}>
                <RodzajMetalu />
                <Izolacja />
                <Żyły />
                <Instalacja />
                <Temperatura />
                <Rezystencja />
                <button type='submit' >Wyszukaj</button>
            </form>
        </div>
        </>
    );
}