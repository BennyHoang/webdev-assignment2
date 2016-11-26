var React = require("react");
var ReactDOM = require("react-dom");
var App = require("./components/App");
var ArticleContent = require("./components/ArticleContent");
var angular = require("angular");

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);

var articleApp = angular.module("articleApp", []);

articleApp.controller("ArticleController", ["$http", function ($http) {
    var _this = this;
    _this.id = "";
    _this.title = "";


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
            }
            );
    } ();




}]);








