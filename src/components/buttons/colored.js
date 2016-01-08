var React = global.React || require('react');

var Colored = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func,
        content: React.PropTypes.string,
        isActive: React.PropTypes.bool,
        color: React.PropTypes.string,
        customClasses: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            onClick: function(){},
            content: "Click Me",
            isActive: false,
            color: "",
            customClasses: "list-button"
        };
    },
    getInitialState: function() {
        return {
            isActive : false
        };
    },
    handleClick: function (data, err) {
        this.props.onClick();
        this.setState({
            isActive: !this.state.isActive
        })
    },
    render: function () {
        var color = {
            "backgroundColor":this.props.color
        };
        return (
            <div
                className={"w-button w-colored "+(this.state.isActive ? "active " : "")+this.props.customClasses}
                onClick={this.handleClick}>
                <div className="background" style={color}></div>
                <div className="head">
                    {this.props.content}
                </div>
            </div>
        );
    }
});

module.exports = Colored;
