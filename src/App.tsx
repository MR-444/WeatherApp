import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          getWeather();
        </a>
      </header>
    </div>
  );
}


function getWeather() : string
{
  let endpoint = 'http://api.openweathermap.org/data/2.5/weather?lat=53.57532&lon=10.01534&appid=69b7632e3b92de94e93daecb004c1447&units=metric&lang=de';
  return endpoint;
}


export default App;
