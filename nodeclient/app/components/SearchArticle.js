var React = require("react");


var SearchArticle = React.createClass({
    render: function () {
        return (
            <div>
                <input type="text" ng-model="articleCtrl.id" />
                <input onclick={articleCtrl.getArticleById()} type="button" defaultValue="Hent" />
            </div>
        );
    }
});

module.exports = SearchArticle;