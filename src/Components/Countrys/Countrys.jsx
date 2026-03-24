import React, { use } from 'react';
import Country from '../Country/Country';
import "./Countrys.css"

const Countrys = ({ fetchMessage }) => {
    const countrys = use(fetchMessage);
    const countries = countrys.countries;
    console.log(countries);
    return (
        <div >
            <h1>In the countries:{countries.length}</h1>
            <div className='countrys'>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countrys;