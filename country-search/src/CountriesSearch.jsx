import React, { useState, useEffect } from 'react';
import CountryCard from './countriesCard';
import './countries.css'

const CountriesSearch = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm)
    );
    setFilteredCountries(filtered);
  }, [countries, searchTerm]);

  const displayedCountries = searchTerm ? filteredCountries : countries;

  return (
    <div>
      <input
      className='searchbar'
        type="text"
        placeholder="Search Countries"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="countryCard">
        {displayedCountries.map((country) => (
          <CountryCard key={country.cca3} flag={country.flags.png} name={country.name.common} />
        ))}
      </div>
    </div>
  );
};

export default CountriesSearch;


  
