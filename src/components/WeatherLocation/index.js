import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from "./../../constants/weathers";

const data = {
  temperature: 5,
  weatherState: CLOUDY,
  humidity: 25,
  wind: "5 m/s"
};

const data2 = {
    temperature: 30,
    weatherState: SUN,
    humidity: 80,
    wind: "10 m/s"
  };

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Madrid',
            data: data,
        };
    }

  handleUpdateClick = () => {
      console.log("actualizado");
      this.setState({
          city: 'Punta Cana',
          data: data2,
      });
  }  

  render() {
      const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <label>Introduce una ciudad</label>
        <input></input>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
