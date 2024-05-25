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
        <div style={{margin:'0',padding:'20px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <input
            type='text'
            placeholder='Search for a country..'
            value={searchItem}
            onChange={e=>setSearchItem(e.target.value)} style={{textAlign:'center', height:"30px",width:"500px"}}/>
            <div style={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center'}}>
                {filteredCountries.map(country=>(
                    <div key={country.cca3} style={{display:'flex',flexDirection:'column',width:'100px',borderRadius:'8px',padding:'10px'}}>
                        <img src={country.flags.png} alt={'Flag of ${country.name.common}'} style={{width:'100px',height:'auto',marginBottom:'10px'}}/>
                        <span style={{margin:'0',fontSize:'10px',textAlign:'center'}}>{country.name.common}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
 export default CountriesSearch;

  
