var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherOutput = require('WeatherOutput');
var ErrorModal = require('ErrorModal')
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
      error: undefined
    })

    openWeatherMap.getTemp(location).then(function(weather){
      that.setState({
        isLoading: false,
        location: weather.location,
        temp: weather.temp,
        error: undefined
      })
    }, function(errorMessage){
      that.setState({
        isLoading: false,
        error: errorMessage.toString(),
        temp: undefined,
        location:undefined
      })
    });
  },
  componentDidMount:function(){
    var location = this.props.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);

      //in order to remove url query string
      window.location.hash='#/';
    }
  },
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);

      //in order to remove url query string
      window.location.hash='#/';
    }

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

    function renderError(){
      if(typeof error === 'string'){
        return(
          <ErrorModal message={error}/>
        )
      } else {
        return(
          <h3></h3>
        )
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>

    )
  }

});

module.exports = Weather;
