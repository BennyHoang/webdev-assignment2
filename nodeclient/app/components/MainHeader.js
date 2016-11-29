var React = require("react");


var MainHeader = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="/">WhatsUp</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/index.html">Customer</a></li>
                            <li><a href="/admin.html">Admin</a></li>
                        </ul>
                    </div>{/*/.nav-collapse */}
                </div>
            </nav>
        );
    }
});

module.exports = MainHeader;