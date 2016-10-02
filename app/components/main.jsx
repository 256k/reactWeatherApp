var React = require("react");
var Nav = require("Nav");
var Main = (props) => {
        return(
            <div>
                <h2>Main Component</h2>
                <Nav/>
                {props.children}
                    {/* // this places the children of main that we defined in app.jsx */}
            </div>
        );
    };

module.exports = Main;
