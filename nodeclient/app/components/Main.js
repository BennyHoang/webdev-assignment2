var React = require("react");
var MainHeader = require("./MainHeader");
var SearchArticle = require("./SearchArticle");


var Main = React.createClass({
    render: function () {
        return (
            <section>
                <MainHeader/>
                <SearchArticle/>
                <div className="container" id="articleContainer"></div>
            </section>
         
        );
    }
});

module.exports = Main;