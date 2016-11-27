﻿var journalistControllers = angular.module("journalistControllers", []);

journalistControllers.controller("ArticleController", ["$http", function ($http) {
    var _this = this;
    _this.id = "";
    _this.title = "";
    var getArticlesUrl = "api/Journalist/GetAllArticles";
    $http
        .get(getArticlesUrl)
        .then(
            function (response) {
                _this.articleList = response.data;
            },
            function (response) {
                console.log("not ok", response);
            }
        );
}
]);
journalistControllers.controller("PostArticleController", ["$http", "$location", function ($http, $location) {
    var _this = this;
    _this.id = "";
    _this.title = "";

    _this.postArticle = function () {
        var postArticleUrl = "api/Journalist/PostArticle";

        $http
            .post(
                postArticleUrl,
                JSON.stringify(
                    {
                        id: _this.id,
                        title: _this.title
                    }
                ),
                {
                    headers: { "Content-Type": "application/json" }
                }
            )
            .then(
                function(response) {
                    alert("Article Posted " + response);
                    $location.path("/list");
                },
                function(response) {
                    console.log(response);
                }
            );
    };
}]);
journalistControllers.controller("EditArticleController", ["$http", "$routeParams", "$location", function ($http, $routeParams, $location) {
    var _this = this;
    _this.id = $routeParams.id;
    _this.title = "";


    _this.getArticle = function () {
        var getArticleByIdUrl = "api/Journalist/GetArticleById/" + _this.id;
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
                function (response) {
                    var id = response.data.article.id;
                    var title = response.data.article.title;
                    _this.id = id;
                    _this.title = title;

                },
                function (response) {
                    console.log("not working man", response);
                }
            );
    }();
    _this.putArticle = function () {
        var updateArticleUrl = "api/Journalist/PutArticle";

        $http
            .put(
                updateArticleUrl,
                JSON.stringify(
                    {
                        id: _this.id,
                        title: _this.title
                    }
                ),
                {
                    headers: { "Content-Type": "application/json" }
                }
            )
            .then(
                function (response) {
                    alert("Article updated");
                    $location.path("/list");
                },
                function (response) {
                    console.log("not working ", response);
                }
            );
    };
    _this.deleteArticle = function () {
        var deleteArticleUrl = "api/Journalist/DeleteArticle";
        $http
            .delete(
                deleteArticleUrl,
                {
                    params: {
                        id: _this.id
                    }
                }
            )
            .then(
                function (response) {
                    alert("deleted");
                    $location.path("/list");
                },
                function (response) {
                    console.log(response);
                }
            );
    };

}]);