import React from 'react';
import './App.css';
import WeatherData from "./WeatherData";


const App: React.FC = () => {
  const weeklyWeatherArray = new WeatherData().getWeeklyData();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Your daily weather forecast of the next week in celsius
        </p>
        <div>
          Monday:    {weeklyWeatherArray[0].temp} <br />

          Tuesday:   {weeklyWeatherArray[1].temp} <br />

          Wednesday: {weeklyWeatherArray[2].temp} <br />

          Thursday:  {weeklyWeatherArray[3].temp} <br />

          Friday:    {weeklyWeatherArray[4].temp} <br />

          Saturday:  {weeklyWeatherArray[5].temp} <br />

          Sunday:    {weeklyWeatherArray[6].temp} <br />
        </div>
      </header>
    </div>
  );
}


export default App;
