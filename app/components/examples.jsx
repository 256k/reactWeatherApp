var React = require("react");
var {Link, IndexLink} = require('react-router');

var Examples = (props) => {
        return(
            <div>
                <h1 className="text-center">Examples</h1>
                <p>Here are a few examples to try out:</p>
                <ol>
                    <li><Link to="/?location=montreal">Montreal, QC</Link></li>
                    <li><Link to="/?location=london">London, UK</Link></li>
                </ol>
            </div>
        )
    };

module.exports = Examples;
