import './currWeather.css';

const CurrWeather = ({ data }) => {
  let iconSrc = `./icons/${data.weather[0].icon}.png`;
  return (
    <div className="weather">
      <div className="top">
        <div>
          <h1 className="city">{data.city}</h1>
          <p className="weatherDesc">{data.weather[0].main}</p>
        </div>
        <img src={iconSrc} className="weatherIcon" alt="" />
      </div>

      <div className="bottom">
        <div className="temprature">
          <h1>{Math.round(data.main.temp)}°C</h1>
        </div>
        <div className="parameters">
          <div className="parameter">
            <div className="parameter-name">Details</div>
          </div>

          <div className="parameter">
            <div className="parameter-name">Feels like</div>
            <div className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </div>
          </div>

          <div className="parameter">
            <div className="parameter-name">Wind</div>
            <div className="parameter-value">{data.wind.speed} m/s</div>
          </div>

          <div className="parameter">
            <div className="parameter-name">Humidity</div>
            <div className="parameter-value">
              {data.main.humidity} g/m<sup>3</sup>
            </div>
          </div>

          <div className="parameter">
            <div className="parameter-name">Pressure</div>
            <div className="parameter-value">{data.main.pressure} Pa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrWeather;
