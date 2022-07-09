import { useState, useEffect } from "react";
import TempCard from "../components/TempCard";
import React from "react";
import Loader from "../components/Loader";
import Search from "../components/Search";
import classes from '../styles/Home.module.css'
import Error from "../components/Error";

export const App = () => {
  const [fetchCity, setFetchCity] = useState("Kiev")
  const [getWeather, setWeather] = useState();
  const [triggerMetrics, setTriggerMetrics] = useState(true);

  useEffect(() => {
    const load = async () => {
      const response = await fetch('api/metrics', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fetchCity }),
      });
      const data = await response.json();
      setWeather({...data});
      setFetchCity("");
    }
    load();
    
  },[triggerMetrics]);
  return getWeather && !getWeather.message ?(
    <div className={classes.main}>
      <TempCard 
        city={getWeather.name}
        country={getWeather.sys.country}
        description = {getWeather.weather[0].description}
        temp={getWeather.main.temp}
        feels_like={getWeather.main.feels_like}
        icon={getWeather.weather[0].icon}
        />
        <Search
          value={fetchCity} 
          onFocus={(e) => {
            e.target.value = ""
          }}
          onChange={(e) => setFetchCity(e.target.value)}
          onKeyDown={(e) => {
            e.keyCode === 13 && setTriggerMetrics(!triggerMetrics);
          }}
        />
    </div>
  ) : getWeather && getWeather.message ?(
  <Error> 
    <Search
          value={fetchCity} 
          onFocus={(e) => {
            e.target.value = ""
          }}
          onChange={(e) => setFetchCity(e.target.value)}
          onKeyDown={(e) => {
            e.keyCode === 13 && setTriggerMetrics(!triggerMetrics);
          }}
          />
  </Error>)
  : (<Loader/>)
}

export default App;
