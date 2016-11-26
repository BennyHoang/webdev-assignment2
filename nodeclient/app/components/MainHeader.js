var React = require("react");


var MainHeader = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="/">HOVEDPROSJEKT</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Nyheter <span className="caret" />
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="/news/5">INSTALLASJON &amp; BEDRIFT BRIEF</a></li>
                                <li><a href="/news/4">SPEED DATE</a></li>
                                <li><a href="/news/3">FORBREDELSER TIL HOVEDPROSJEKTET</a></li>
                                <li role="separator" className="divider" />
                                <li><a href="/news">se alle nyheter</a></li>
                            </ul>
                        </li>
                        <li><a href="/group_members">Teamet</a></li>
                        <li><a href="/contact">Kontakt oss</a></li>
                    </ul>
                </div>{/*/.nav-collapse */}
            </div>
        );
    }
});

module.exports = MainHeader;