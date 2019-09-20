import React, { Component, MouseEvent } from 'react';
import './App.css';
import WeatherData from "./WeatherData";
import {DayOfWeek} from  "./models/DayOfWeek";
import Main from "./models/main"


interface ButtonProps {
  dayOfWeek: string;
/*  temp:  number;
  pressure: number;
  humidity:  number;
  temp_min:   number;
  temp_max: number;*/
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
      {Object.values(DayOfWeek).filter(key => !isNaN(Number(key))).map((key: any) => {
        return (<p><Button dayOfWeek={DayOfWeek[key]} />{weeklyWeatherArray[key].temp} </p>)
      })}


    </div>
  );
}

export class Button extends Component<ButtonProps> {
  handleClick(event: MouseEvent) {
    event.preventDefault();
    alert(event.currentTarget.tagName); // alerts BUTTON
  }

  render() {
      return <button onClick={this.handleClick}> {this.props.dayOfWeek} </button>
  }
}

export default App;
