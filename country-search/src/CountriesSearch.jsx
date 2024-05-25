import React, {useState,useEffect} from 'react';

function CountriesSearch(){

const[countries,setCountries]=useState([]);
const[searchItem, setSearchItem]=useState('');

useEffect(()=>{
    fetch(' https://restcountries.com/v3.1/all').then(response=>response.json()).then(data=>setCountries(data)).catch(error=>console.error('Error fetching data',error))
},[]);
const filteredCountries=countries.filter(country=>country.name.common.toLowerCase().includes(searchItem.toLowerCase()))
;


    return(
        <div className='countryCard' style={{margin:'0',padding:'20px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <input
            className='countryCard'
            type='text'
            placeholder='Search for a country..'
            value={searchItem}
            onChange={e=>setSearchItem(e.target.value)} style={{textAlign:'center', height:"30px",width:"500px"}}/>

            <div style={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center'}}>
                {filteredCountries.length>0?(filteredCountries.map(country=>(<div key={country.cca3} className='countryCard' style={{display:'flex',flexDirection:'column',width:'100px',borderRadius:'8px',padding:'10px'}}>
                        <img src={country.flags.png} alt={'Flag of ${country.name.common}'}  className='countryCard' style={{width:'100px',height:'auto',marginBottom:'10px'}}/>
                        <p style={{margin:'0',fontSize:'10px',textAlign:'center'}} className='countryCard'>{country.name.common}</p>
                    </div>))):(<p>No matching countries found</p>)}
            </div>
        </div>
    );
}
 export default CountriesSearch;

  