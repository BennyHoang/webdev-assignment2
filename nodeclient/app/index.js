var React = require("react");
var ReactDOM = require("react-dom");
var App = require("./components/App");
var ArticleContent = require("./components/ArticleContent");
var Error = require("./components/Error");
var SearchArticle = require("./components/SearchArticle");

var angular = require("angular");

var articleApp = angular.module("articleApp", []);

ReactDOM.render(
    <App />,
    document.getElementById("app")
);

articleApp.controller("ArticleController", ["$http", function ($http) {
    var _this = this;
    _this.id = "";
    _this.title = "";

    _this.getArticleById = function (idFromReact) {
        var getArticleByIdUrl = "api/Customer/GetArticleById";
        $http
            .get(
                getArticleByIdUrl,
                {
                    params: {
                        id: idFromReact
                    }
                }
            )
            .then(
                function (response) {
                    _this.articleList = response.data;
                    var array = Object.keys(_this.articleList).map(function (k) { return _this.articleList[k] });
                    //console.log(array);
                    ReactDOM.render(
                        <ArticleContent list={array} />,
                        document.getElementById("articleContainer")
                    );
                },
                function (response) {
                    ReactDOM.render(
                        <Error />,
                        document.getElementById("articleContainer")
                    );
                }
            );
    };

    ReactDOM.render(
        <SearchArticle onClick={_this.getArticleById} />,
        document.getElementById("searchArticleContainer")
    );
    _this.getArticles = function () {
        var getArticlesUrl = "api/Customer/GetAllArticles";
        $http
            .get(getArticlesUrl)
            .then(
            function (response) {
                _this.articleList = response.data;
                console.log(_this.articleList);
                ReactDOM.render(
                    <ArticleContent list={_this.articleList} />,
                    document.getElementById("articleContainer")
                );
            },
            function (response) {
                console.log("not ok", response);
                ReactDOM.render(
                    <Error />,
                    document.getElementById("articleContainer")
                );
            }
            );
    } ();




}]);








