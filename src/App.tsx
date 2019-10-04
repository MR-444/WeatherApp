import React, { Component, MouseEvent } from 'react';
import './App.css';
import {WeatherData,  WeatherService} from "./WeatherData";

import {DayOfWeek} from  "./models/DayOfWeek";
import Main from "./models/main"


interface ButtonProps {
  dayOfWeek: string;
  temp: number;
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
        Your daily weather forecast for the next week.
        Day and temperature in celsius.
      </p>
    </div>
  );
}


function Overview() {
  const weeklyWeatherArray = new WeatherData().getWeeklyData();

  return (
    <div>
      {Object.values(DayOfWeek).filter(key => !isNaN(Number(key))).map((key: any) => {
        return (<p><Button dayOfWeek={DayOfWeek[key]} temp= {weeklyWeatherArray[key].temp} /> </p>)
      })}
    </div>
  );
}

export class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {dayOfWeek: this.props.dayOfWeek}
    this.state = {temp: this.props.temp}
  }


  handleClick(event: MouseEvent) {
    event.preventDefault();
    alert(this.state); // alerts BUTTON
  }

  render() {
      return <button onClick={this.handleClick}> {this.props.dayOfWeek} {this.props.temp} </button>
  }
}

export default App;
