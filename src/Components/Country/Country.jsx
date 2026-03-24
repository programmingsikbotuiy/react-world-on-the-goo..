import React, { useState } from 'react';
import "./Country.css"

 const Country = ({country,handleVisitedCountries,handleVisitedflages}) => {
    // console.log(country.capital.capital);
    const [visit,setVisit] =useState(false);
    // console.log(handleVisitedCountries);

 


function eventHandle(){

    // basic System
    // if(visit){
    //     setVisit(false)
    // }else{
    //     setVisit(true)
    // }


    // seceond system
    // setVisit(visit ? false : true)

    setVisit(!visit);
    handleVisitedCountries(country);
    
    
}

    return (
        // <div className={`country ${visit?"country-visited":"country-not-visited"}`}>
        <div className={`country ${visit && "country-visited"}` }>
            
            <img src={country.flags.flags.png} alt="" />
            <h2>name:{country.name.common}</h2>
            <p>Populatin :{country.population.population}</p>
            {/* <p>Languages : {country.languages.languages}</p> */}
            <p>Languages:{country.languages.languages.eng}</p>
            <p>Religon:{country.region.region}</p>
            <h1>Capital:{country.capital.capital}</h1>
            <p>Area : {country.area.area} {country.area.area > 30000?"Big Country" : "Small country"}</p>
            <button onClick={eventHandle}>{visit ? "visited" : "Not visited"}</button>
            <button onClick={()=>{handleVisitedflages(country?.flags?.flags?.png)}}>Add visited flag</button>
        </div>
    );
};

export default Country;