var React = require("react");
var MainHeader = require("./MainHeader");

var App = React.createClass({
    render:function(){
        return(
            <Main/>
        );
    }
});

var Main = React.createClass({
    render: function () {
        return (
            <section>
                <MainHeader/>
                <div className="container" id="searchArticleContainer"></div>
                <div className="container" id="articleContainer"></div>
            </section>
         
        );
    }
});

module.exports = App;