import React, {useState,useEffect} from 'react';
import './countries.css'

function CountriesSearch(){

const[countries,setCountries]=useState([]);
const[searchItem, setSearchItem]=useState('');

useEffect(()=>{
    fetch(' https://restcountries.com/v3.1/all').then(response=>response.json())
    .then(data=>setCountries(data))
    .catch(error=>console.error('Error fetching data',error))

},[]);
const filteredCountries=countries.filter(country=>country.name.common
    .toLowerCase()
    .includes(searchItem
        .toLowerCase()))
;



    return(
        <div className='countryCard' >
            <div className='countryCard'><input
            className='search-bar'
            type='text'
            placeholder='Search for a country..'
            value={searchItem}
            onChange={e=>setSearchItem(e.target.value)} /></div>
            

            <div className='country-cards'>
                {filteredCountries.length>0?(filteredCountries.map(country=>(<div key={country.cca3} className='countryCard' >
                        <img src={country.flags.png} alt={'Flag of ${country.name.common} '}  />
                        <p>{country.name.common}</p></div>
                    ))):(<p></p>)}
            </div>
        </div>
    );
}
 export default CountriesSearch;

  
