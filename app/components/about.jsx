var React = require('react');

var About = (props) => {
        return(
            <div>
            <h1 className="text-center">About</h1>
            <p className="text-center">This is a React app demo project following the Udemy React course.<br/>
            this app fetches the weather information of a chosen city. you can type your city in the search box and the app will tell you the weather in this city.<br/>
            thank you for using this demo.</p>
            </div>
        )
    };
module.exports = About;
