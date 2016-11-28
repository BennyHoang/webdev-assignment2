var React = require("react");
var Article = React.createClass({
    render: function () {
        return (
            <article className="col col-md-6">
                <h2>{this.props.id}</h2>
                <h3>{this.props.title}</h3>
                <img className="img-responsive" src={this.props.img} alt={this.props.title}/>
            </article>
        );
    }
});
var ArticleContent = React.createClass({
    render: function () {

        var articles = this.props.list.map(function (article) {
            return (
                <Article title={article.article.title} id={article.article.id} img={article.article.img}></Article>
            )
        });

        return (
            <section className="row">
                {articles}
            </section>
        )
    }
});

module.exports = ArticleContent;






