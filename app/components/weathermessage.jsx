var React = require('react');

var WeatherMessage = (props) => {
        var {location, temp} = props;
        // or i can just use the object destructuring by using: weathermessage = ({location, temp}) =>{...}
        return(
            <h1 className='text-center'>
                Location: {location}<br/>
                Currently: {temp} °C
            </h1>
        )
    };
module.exports= WeatherMessage;
