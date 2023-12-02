import React from 'react';
import './Homepage.css'
import Header from '../../components/header/Header';
import RodzajMetalu from '../../components/RodzajMetalu/RodzajMetalu';

export default function Homepage() {
    return( 
        <>
        <Header/>
        <div className="main">
            <form>
                <RodzajMetalu/>
            </form>
        </div>
        </>
    );
}