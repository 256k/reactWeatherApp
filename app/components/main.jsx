var React = require("react");
var Nav = require("Nav");
var Main = (props) => {
        return(
            <div>
            <Nav/>
            <h2>Main Component</h2>
            {props.children}
                {/* // this places the children of main that we defined in app.jsx */}


            </div>
        );
    };

module.exports = Main;
