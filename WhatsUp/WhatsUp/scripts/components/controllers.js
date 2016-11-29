var journalistControllers = angular.module("journalistControllers", []);
var lastID = "";

//Controller for list.html view
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
                var last = _this.articleList[_this.articleList.length - 1];
                lastID = last.article.id;
                lastID++;
                //console.log(lastID);
            },
            function (response) {
                console.log("not ok", response);
            }
        );
}
]);
//Controller for post.html view
journalistControllers.controller("PostArticleController", ["$http", "$location", "$scope", function ($http, $location, $scope) {
    var _this = this;
    var imgUrl = "";
    _this.id = setId(lastID);
    _this.title = "";
    _this.description = "";

    $scope.imageToUpload = {};

    $scope.setImageToUpload = function (files) {
        $scope.imageToUpload = files[0];
        imgUrl = "Images/" + $scope.imageToUpload.name;
        console.log($scope.imageToUpload);
        //http://codepedia.info/html5-filereader-preview-image-show-thumbnail-image-before-uploading-on-server-in-jquery/

        var reader = new FileReader();

        reader.onload = function (e) {
            $scope.img_src = e.target.result;
            $scope.$apply();
        }
        reader.readAsDataURL(files[0]);
    }

    _this.uploadImage = function () {
        var uploadImageUrl = "api/Journalist/UploadImage";
        var formData = new FormData();
        formData.append("file", $scope.imageToUpload);

        $http
            .post(
                uploadImageUrl,
                formData,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": undefined
                    },
                    transformRequest: angular.identity
                }
            )
            .then(
                function (response) {

                },
                function (response) {
                    console.log(response);
                }
            );
    };

    _this.postArticle = function () {
        var postArticleUrl = "api/Journalist/PostArticle";
        $http
            .post(
                postArticleUrl,
                JSON.stringify(
                    {
                        id: _this.id,
                        title: _this.title,
                        img: imgUrl,
                        description: _this.description
                    }
                ),
                {
                    headers: { "Content-Type": "application/json" }
                }
            )
            .then(
                function (response) {
                    _this.uploadImage();
                    alert("Article Posted " + response);
                    $location.path("/list");
                },
                function (response) {
                    console.log(response);
                }
            );
    };
}]);
//Controller for details.html view
journalistControllers.controller("EditArticleController", ["$http", "$routeParams", "$location", function ($http, $routeParams, $location) {
    var _this = this;
    //using $routeParams to get the ID on clicked element
    _this.id = $routeParams.id;
    _this.title = "";
    _this.dateTime = "";
    _this.description = "";


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
                    var dateTime = response.data.article.dateTime;
                    var description = response.data.article.description;
                    _this.id = id;
                    _this.title = title;
                    _this.dateTime = dateTime;
                    _this.description = description;

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

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//setID
function setId(lastID) {
    var id;
    //setID
    if (lastID === "") {
        id = getRandomInteger(1, 100);
    } else {
        id = lastID;
    }
    return id;
}
