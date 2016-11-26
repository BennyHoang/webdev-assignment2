var journalistApp = angular.module("journalistApp", [
    "ngRoute",
    "journalistControllers"
]);

journalistApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
        when("/list", {
            templateUrl: "partials/list.html",
            controller: "ArticleController"
        })
        .when("/details", {
            templateUrl: "partials/details.html",
            controller: "EditArticleController"
        })
        .otherwise({
            redirectTo: "/list"
        });
}]);