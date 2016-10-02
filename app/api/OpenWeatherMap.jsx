var axios = require('axios');

const OMV_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4aa684b4b966ef5ad0eb51136c4fb8ed&units=metric';
// 4aa684b4b966ef5ad0eb51136c4fb8ed
//
module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL= `${OMV_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then(function(res) {
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                var resObj = {temp: res.data.main.temp, name: res.data.name}
                return resObj;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
};
