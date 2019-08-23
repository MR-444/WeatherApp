import React, { Component, MouseEvent } from 'react';
import './App.css';
import WeatherData from "./WeatherData";
import {DayOfWeek} from  "./models/DayOfWeek";
import Main from "./models/main"



interface Props {
  day: String;
}

// original
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
        Your daily weather forecast for the next week in celsius.
      </p>
    </div>
  );
}


function Overview() {
  const weeklyWeatherArray = new WeatherData().getWeeklyData();

  return (
    <div>
      <Button value = {DayOfWeek[DayOfWeek.Monday]} />
      {DayOfWeek[DayOfWeek.Monday]}:    {weeklyWeatherArray[DayOfWeek.Monday].temp} <br />

      <Button  />
      {DayOfWeek[DayOfWeek.Tuesday]}:   {weeklyWeatherArray[DayOfWeek.Tuesday].temp} <br />

      <Button  />
      {DayOfWeek[DayOfWeek.Wednesday]}: {weeklyWeatherArray[DayOfWeek.Wednesday].temp} <br />

      <Button  />
      {DayOfWeek[DayOfWeek.Thursday]}:  {weeklyWeatherArray[DayOfWeek.Thursday].temp} <br />

      <Button  />
      {DayOfWeek[DayOfWeek.Friday]}:    {weeklyWeatherArray[DayOfWeek.Friday].temp} <br />

      <Button  />
      {DayOfWeek[DayOfWeek.Saturday]}:  {weeklyWeatherArray[DayOfWeek.Saturday].temp} <br />

      <Button  />
      {DayOfWeek[DayOfWeek.Sunday]}:    {weeklyWeatherArray[DayOfWeek.Sunday].temp} <br />
    </div>
  );
}

export class Button extends Component {
  private readonly day: string;

  constructor(public props: any, public dayOfWeek: string)
  {
    super(props);
    this.day = "dayOfWeek";
  }

  handleClick(event: MouseEvent) {
    event.preventDefault();
    alert(event.currentTarget.tagName); // alerts BUTTON
  }

  render() {
      return <button onClick={this.handleClick}> {this.day} </button>
  }
}

export default App;
