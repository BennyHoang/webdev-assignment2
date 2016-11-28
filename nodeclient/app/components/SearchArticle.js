var React = require("react");
var SearchArticle = React.createClass({
    getInitialState: function(){
        alert(this.props.text);
        return {input : this.props.text};
    },
    handleChange: function(e){
        this.setState({input: e.target.value});
    },
    handleClick: function(){
        var state = this.state.input;
        var props = this.props.text;
        console.log("props: " + props + " state: " + state);
        props = state;
        console.log("merged: " + props);
        this.props.text = this.state.input;
        console.log("raw merged: " + this.props.text)
        this.props.onClick(state);
        
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
