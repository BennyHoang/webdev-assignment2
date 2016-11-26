var React = require("react");


var MainHeader = React.createClass({
    render: function () {
        return (
            <section>
                <h2>MainHeader</h2>
                <div className="container" id="articleContainer"></div>
            </section>
         
        );
    }
});

module.exports = MainHeader;