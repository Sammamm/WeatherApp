import './App.css';
import { useState } from 'react';
import Search from './components/search/search';
import CurrWeather from './currWeather/CurrWeather';
import { GEO_API_URL, geoApiOptions, OW_API, OW_API_URL } from './api';
import Forecast from './Forecast/Forecast';

function App() {
  //   State variable for search value
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [search, setSearch] = useState(null);

  //   function returns the name of the cities corresponding to entered value
  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions,
      );

      const result = await response.json();
      return {
        options: result.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  };

  //   Value entered in the search bar
  const onSearchChange = (searchValue) => {
    // console.log(searchValue);
    const [lat, lon] = searchValue.value.split(' ');

    const currWeatherFetch = fetch(
      `${OW_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OW_API}&units=metric`,
    );
    const currForecastFetch = fetch(
      `${OW_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OW_API}&units=metric`,
    );

    Promise.all([currWeatherFetch, currForecastFetch]).then(async (res) => {
      const weatherRes = await res[0].json();
      const forecastRes = await res[1].json();

      setWeather({ city: searchValue.label, ...weatherRes });
      setForecast({ city: searchValue.label, ...forecastRes });
    });

    console.log(weather);
    console.log(forecast);
  };

  return (
    <div className="container">
      <Search
        search={search}
        onSearchChange={onSearchChange}
        loadOptions={loadOptions}
      />
      {weather && <CurrWeather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
