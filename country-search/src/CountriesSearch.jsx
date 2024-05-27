import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCards';
import './countries.css'


const CountriesSearch = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setError(error.message);
      }
    };

    fetchCountries();
  }, []);

 
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('Filtered Countries:', filteredCountries);

  return (
    <div className="countryCard">
      <input
        type="text"
        id="searchBar"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <div id="countriesContainer" className="countriesContainer" >
          {filteredCountries.length > 0 ? (
            filteredCountries.map(country => (
              <CountryCard
                key={country.cca3}
                name={country.name.common}
                flag={country.flags.svg}
              />
            ))
          ) : (
            <p className="no-results">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CountriesSearch;