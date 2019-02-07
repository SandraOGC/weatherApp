import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <div>
        <Location city={"España"}></Location>
        <WeatherData />
    </div>
);

export default WeatherLocation;