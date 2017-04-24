var React = require('react');

var About = (props)=> {
  return (
  <div>
    <h1 className="text-center">About</h1>
    <p>This is a simple React application that can
    give the current temperature of any listed city</p>
    <p>Here are some of the tools I used:</p>
    <ul>
      <li>
        <a href="https://facebook.github.io/react">React</a> - This was the JS
        framework used.
      </li>
      <li>
        <a href="http://openweathermap.org">Open Weather Map</a> - The API used
         to search for weather data by city name.
      </li>
    </ul>
  </div>

  )
}

module.exports = About;
