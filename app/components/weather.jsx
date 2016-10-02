var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false,
            errorstate: false,
        }
    },
    handleSearch: function(location){
        this.setState({isLoading: true});
        openWeatherMap.getTemp(location).then((resultobj) => {
            this.setState({
                errorstate: false,
                isLoading: false,
                location: resultobj.name,
                temp: Math.ceil(resultobj.temp)

            });
        },
        (errmessage) => {
            this.setState({isLoading: false, errorstate: true});
        });

    },
    render: function(){
        var {isLoading, temp, location, errorstate} = this.state;

        function renderMessage(){
            if (isLoading) {
                return <h3>fetching weather...</h3>;
            } else if (errorstate){
                return <h3> Could not find your city!</h3>;
            }
             else if ( temp && location){
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
        return(
            <div>
            <h1>Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            </div>
        );
    }
});
module.exports = Weather;
