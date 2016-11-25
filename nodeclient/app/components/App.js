var React = require("react");
var Angular = require("angular");
var MainHeader = require("./MainHeader");
var Article = React.createClass({
    render: function () {
        return (
            <article className="col col-md-6">
                <h2>{this.props.id}</h2>            
                <h3>{this.props.title}</h3>
            </article>
        );
    }
});
var App = React.createClass({
    render: function () {

        var articles = this.props.list.map(function (article) {
            return (
                <Article title={article.article.title} id={article.article.id}></Article>
            )
        });

        return (
            <div className="container">
                <section className="row">
                    {articles}
                </section>
            </div>
        )
    }
});

module.exports = App;






