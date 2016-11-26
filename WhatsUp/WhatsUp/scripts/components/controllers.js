var journalistControllers = angular.module("journalistControllers", []);

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
journalistControllers.controller("EditArticleController", ["$http", "$routeParams", function($http, $routeParams) {
    
}]);