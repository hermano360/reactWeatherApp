var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherOutput = require('WeatherOutput');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function(){
    return {
      isLoading: false,
      error: false
    }
  },
  handleSearch: function(location){
    var that = this;

    this.setState({
      isLoading: true,
      error: false
    })

    openWeatherMap.getTemp(location).then(function(weather){
      that.setState({
        isLoading: false,
        location: weather.location,
        temp: weather.temp,
        error: false
      })
    }, function(errorMessage){
      that.setState({
        isLoading: false,
        error: true
      })
    });
  },
  render: function (){
    var {error,isLoading,location,temp} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching Weather...</h3>
      } else if(temp && location) {
        return <WeatherOutput location={location} temp={temp}/>
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>

    )
  }

});

module.exports = Weather;
