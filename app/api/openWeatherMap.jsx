var axios = require('axios');
const APP_ID = '721f7f7ac32a5a2b8e99a1cf26c2d3b2';


const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid='+ APP_ID;//
module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res);
      } else {
        return {
          temp:res.data.main.temp,
          location: res.data.name
        }
      }
    }, function(err){
      throw new Error('City weather information not available');
    });
  }
}
