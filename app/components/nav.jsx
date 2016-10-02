var React = require("react");
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                    <li className="menu-text">Weather App</li>
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get weather</IndexLink></li>
                        <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link></li>
                        <li><Link to="/ex" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">

                </div>
            </div>
        );
    };

module.exports = Nav;
