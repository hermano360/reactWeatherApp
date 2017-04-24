var React = require('react');

var WeatherOutput = ({location,temp}) => {
  return (
    <h3 className="text-center">It's {temp} in {location}</h3>
  )
}

module.exports = WeatherOutput;
