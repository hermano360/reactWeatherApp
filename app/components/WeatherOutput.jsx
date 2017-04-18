var React = require('react');

// var WeatherOutput = React.createClass({
//   render: function (){
//     var {location,temp} = this.props;
//
//     return (
//       <h3>It's {temp} in {location}</h3>
//     )
//   }
// });

var WeatherOutput = ({location,temp}) => {
  return (
    <h3>It's {temp} in {location}</h3>
  )
}

module.exports = WeatherOutput;
