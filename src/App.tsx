import React from 'react';
import './App.css';
import WeatherData from "./WeatherData";
import {DayOfWeek} from  "./models/DayOfWeek";


const App: React.FC = () => {
  const weeklyWeatherArray = new WeatherData().getWeeklyData();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Your daily weather forecast of the next week in celsius
        </p>
        <div>
          Monday:    {weeklyWeatherArray[DayOfWeek.Monday].temp} <br />

          Tuesday:   {weeklyWeatherArray[DayOfWeek.Tuesday].temp} <br />

          Wednesday: {weeklyWeatherArray[DayOfWeek.Wednesday].temp} <br />

          Thursday:  {weeklyWeatherArray[DayOfWeek.Thursday].temp} <br />

          Friday:    {weeklyWeatherArray[DayOfWeek.Friday].temp} <br />

          Saturday:  {weeklyWeatherArray[DayOfWeek.Saturday].temp} <br />

          Sunday:    {weeklyWeatherArray[DayOfWeek.Sunday].temp} <br />
        </div>
      </header>
    </div>
  );
}


export default App;
