var journalistApp = angular.module("journalistApp", [
    "ngRoute",
    "journalistControllers"
]);


//docs for routing: https://docs.angularjs.org/api/ngRoute/provider/$routeProvider

journalistApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
        when("/list", {
            templateUrl: "partials/list.html",
            controller: "ArticleController"
        })
        .when("/details/:id", {
            templateUrl: "partials/details.html",
            controller: "EditArticleController"
        })
        .when("/post", {
            templateUrl: "partials/post.html",
            controller: "PostArticleController"
        })
        .otherwise({
            redirectTo: "/list"
        });
}]);