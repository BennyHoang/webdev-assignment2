var React = require("react");
var Angular = require("angular");

var Article = React.createClass({
    render: function(){
        return(
            <article className="col col-md-6">
                <h3>{this.props.title}</h3>
            </article>
        );
    }
});

var MainHeader = React.createClass({

    render: function () {
        var articles = this.props.list.map(function(article){
            return (
                <Article title={article.title}>{article.title}</Article>
            )
        });

        return (
            <div className="container">
                <section className="row">
                    {articles}
                </section>
            </div>
        );
    }
});

module.exports = MainHeader;