var React = require("react");
var Article = React.createClass({
    render: function () {
        var img;
        if(this.props.img === ""){
            img = "Images/404.jpg";
        }else{
            img = this.props.img;
        }
        return (
            <article className="col col-md-6">
                <h2 className="title-id">{this.props.id}</h2>
                <h3>{this.props.title}</h3>
                <img className="img-responsive" src={img} alt={this.props.title} />
            </article>
        );
    }
});
var ArticleContent = React.createClass({
    render: function () {
        var articles;
        console.log(this.props.list.length);
        if (this.props.list.length > 2) {
            articles = this.props.list.map(function (article) {
                console.log(article.length);
                return (
                    <Article title={article.article.title} id={article.article.id} img={article.article.img}></Article>
                )
            });
        }else{
            articles = this.props.list.map(function(article){
                console.log(article);
                return(
                    <Article title={article.title} id={article.id} img={article.img}></Article>
                )
            });
        }

        return (
            <section className="row" >
                {articles}
            </section >
        )
    }
});

module.exports = ArticleContent;






