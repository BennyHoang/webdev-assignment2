var journalistApp = angular.module("journalistApp", [
    "ngRoute",
    "journalistControllers"
]);

journalistApp.config([
    "$routeProvider", function($routeProvider) {
        $routeProvider.
            when("/list", {
                templateUrl: "partials/list.html",
                controller: "ArticleController"
            })
            .otherwise({
                redirectTo: "/list"
            });
    }]);