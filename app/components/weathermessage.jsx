var React = require('react');

var WeatherMessage = (props) => {
        var {location, temp} = props;
        // or i can just use the object destructuring by using: weathermessage = ({location, temp}) =>{...}
        return(
            <h1>
                location: {location}<br/>
                temp: {temp} °C
            </h1>
        )
    };
module.exports= WeatherMessage;
