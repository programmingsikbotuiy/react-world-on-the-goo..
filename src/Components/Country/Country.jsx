import React from 'react';
import "./Country.css"

 const Country = ({country}) => {
    console.log(country.capital.capital);
    return (
        <div className="country">
            
            <img src={country.flags.flags.png} alt="" />
            <h2>name:{country.name.common}</h2>
            <p>Populatin :{country.population.population}</p>
            {/* <p>Languages : {country.languages.languages}</p> */}
            <p>Languages:{country.languages.languages.eng}</p>
            <p>Religon:{country.region.region}</p>
            <h1>Capital:{country.capital.capital}</h1>
            <p>Area : {country.area.area} {country.area.area > 30000?"Big Country" : "Small country"}</p>

        </div>
    );
};

export default Country;