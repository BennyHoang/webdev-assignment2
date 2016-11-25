var React = require("react");
var ReactDOM = require("react-dom");
var App = require("./components/App");
var angular = require("angular");
/*
var halloweenJSON = {
            "halloweenCostumes": [
                {
                    "title": "Cowboy",
                    "description": "Cowboy costume with horse",
                },
                {
                    "title": "Ketchup",
                    "description": "Dress up as a ketchup bottle",
                },
                {
                    "title": "Toddler Yoda",
                    "description": "Let Your Baby be Yoda",
                }
            ]
        };

        ReactDOM.render(
            <App list={halloweenJSON.halloweenCostumes}></App>,
            document.getElementById("app")
        )
*/


var halloweenJSON = {
    "halloweenCostumes": [
        {
            "title": "Cowboy",
            "description": "Cowboy costume with horse",
        },
        {
            "title": "Ketchup",
            "description": "Dress up as a ketchup bottle",
        },
        {
            "title": "Toddler Yoda",
            "description": "Let Your Baby be Yoda",
        }
    ]
};



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
                    <App list={_this.articleList} />,
                    document.getElementById("app")
                );
            },
            function (response) {
                console.log("not ok", response);
            }
            );
    } ();




}]);








