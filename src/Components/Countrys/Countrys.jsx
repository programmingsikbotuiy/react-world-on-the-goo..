import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countrys.css"

const Countrys = ({ fetchMessage }) => {
    const [visitedCountries,setVisitedCountries] = useState([])
       const [visitedflags,serVisitedflags]= useState([])

 
    

    const handleVisitedCountries = (country)=>{
        console.log("handle visited country clicked",country);
        const setVisitedCountrys = [...visitedCountries,country]
        setVisitedCountries(setVisitedCountrys)
    }
       const handleVisitedflages = (flag)=>{
       const newVisitedFlags=[...visitedflags,flag];
       serVisitedflags(newVisitedFlags)
    }
    const countrys = use(fetchMessage);
    const countries = countrys.countries;
    console.log(countries);
    return (
        <div >
            <h1>In the countries:{countries.length}</h1>
            <h3>Total country visited :{visitedCountries.length}</h3>
            <h3>Flag : {visitedflags.length}</h3>

            <div className='visited-flag'>
                {
                visitedflags.map(flag => <img src={flag}></img>)
            }
            </div>
            {
                visitedCountries.map(country => <li>{country.name.common}</li>)
            }
            <div className='countrys'>
                {
                    countries.map(country => <Country 
                        country={country}  handleVisitedCountries={handleVisitedCountries} handleVisitedflages={handleVisitedflages} >
                           
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countrys;