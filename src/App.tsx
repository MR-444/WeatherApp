import React from 'react';
import './App.css';
import WeatherData from "./WeatherData";
import {DayOfWeek} from  "./models/DayOfWeek";


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Intro/>
        <Overview/>
      </header>
    </div>
  );
}

function Clock(props: any) {
  return (
    <div>
      <h5>It is {props.date.toLocaleTimeString()}.</h5>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <p>
        <Clock date={new Date()}/>
        Your daily weather forecast of the next week in celsius.
      </p>
    </div>
  );
}


function Overview() {
  const weeklyWeatherArray = new WeatherData().getWeeklyData();

  return (
    <div>
      Monday:    {weeklyWeatherArray[DayOfWeek.Monday].temp} <br />

      Tuesday:   {weeklyWeatherArray[DayOfWeek.Tuesday].temp} <br />

      Wednesday: {weeklyWeatherArray[DayOfWeek.Wednesday].temp} <br />

      Thursday:  {weeklyWeatherArray[DayOfWeek.Thursday].temp} <br />

      Friday:    {weeklyWeatherArray[DayOfWeek.Friday].temp} <br />

      Saturday:  {weeklyWeatherArray[DayOfWeek.Saturday].temp} <br />

      Sunday:    {weeklyWeatherArray[DayOfWeek.Sunday].temp} <br />
    </div>
  );
}


export default App;
