var React = require("react");

var SearchArticle = React.createClass({
    getInitialState: function(){
        alert(this.props.id);
        return {input : this.props.id};
    },
    handleChange: function(e){
        this.setState({input: e.target.value});
    },
    handleClick: function(){
        var state = this.state.input;
        var props = this.props.id;
        console.log("props: " + props + " state: " + state);
        props = state;
        console.log("merged: " + props);
        console.log("raw merged: " + this.props.id)
        this.props.onClick();
        
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
