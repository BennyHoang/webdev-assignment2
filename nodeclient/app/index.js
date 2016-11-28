var React = require("react");
var ReactDOM = require("react-dom");
var App = require("./components/App");
var ArticleContent = require("./components/ArticleContent");
var Error = require("./components/Error");
var SearchArticle = require("./components/SearchArticle");

var angular = require("angular");

var articleApp = angular.module("articleApp", []);
   
    ReactDOM.render(
        <App/>,
        document.getElementById("app")
    );

articleApp.controller("ArticleController", ["$http", function ($http) {
    var _this = this;
    _this.id = "";
    _this.title = "";

    _this.sayHello = function(){
        alert(_this.id);
    };

    _this.getArticleById = function () {
        var getArticleByIdUrl = "api/Customer/GetArticleById";
        $http
            .get(
                getArticleByIdUrl,
                {
                    params: {
                        id: _this.id
                    }
                }
            )
            .then(
                function(response){
                    var id = response.data.article.id;
                    var title = response.data.article.title;
                    _this.id = id;
                    _this.title = title;
                },
                function(response){
                    console.log("No go", response);
                }
            );
    };

    ReactDOM.render(
        <SearchArticle onClick={_this.getArticleById} text={_this.id}/>,
        document.getElementById("searchArticleContainer")
    );
    var getArticles = function () {
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








