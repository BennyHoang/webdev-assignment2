var React = require("react");
var SearchArticle = React.createClass({
    getInitialState: function(){
        return {input : ""};
    },
    handleChange: function(e){
        this.setState({input: e.target.value});
    },
    handleClick: function(){
        this.props.onClick(this.state.input);
        
    },
    render: function () {
        
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <input onClick={this.handleClick} type="button" defaultValue="Hent" />
            </div>
        );
    }
});

module.exports = SearchArticle;
