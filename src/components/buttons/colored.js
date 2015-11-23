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
            content: "",
            isActive: false,
            color: "",
            customClasses: ""
        };
    },
    getInitialState: function() {
        return {
            color: {
                "backgroundColor":this.props.color
            },
            className : "warm-component w-button w-colored "+(this.props.isActive ? "active " : "")+this.props.customClasses
        };
    },
    handleClick: function (data, err) {
        this.props.onClick();
        if (this.state.isActive == true) {
            this.setState({
                isActive: false,
                className : "warm-component w-button w-colored "+this.props.customClasses
            })
        } else {
            this.setState({
                isActive: true,
                className : "warm-component w-button w-colored active "+this.props.customClasses
            })
        }
    },
    render: function () {
        return (
            <div className={this.state.className} onClick={this.handleClick}>
                <div className="background" style={this.state.color}></div>
                <div className="head">
                    {this.props.content}
                </div>
            </div>
        );
    }
});

module.exports = Colored;
