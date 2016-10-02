var React = require("react");
var Nav = require("Nav");
var Main = (props) => {
        return(
            <div>
            <Nav/>
            <div className="row">
                <div className="small-centered medium-4 columns">
                    {props.children}
                </div>
            </div>

                {/* // this places the children of main that we defined in app.jsx */}


            </div>
        );
    };

module.exports = Main;
