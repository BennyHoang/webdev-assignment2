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
            <div className="input-group">
                <input className="form-control" type="text" onChange={this.handleChange} placeholder="search article by ID..."/>
                <span className="input-group-btn">
                    <input className="btn btn-primary" onClick={this.handleClick} type="button" defaultValue="Search" />
                </span>
            </div>
        );
    }
});

module.exports = SearchArticle;
