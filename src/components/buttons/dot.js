var React = global.React || require('react');

var DotButton = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            onClick: function() {alert("Dot button clicked!");},
            customClasses : ''
        }
    },
    getInitialState: function() {
        return ({
            className : "warm-component w-button w-dot "+this.props.customClasses
        });
    },
    handleClick: function() {
        this.props.onClick();
    },
    render: function() {
        var that = this;
        return (
            <div onClick={this.handleClick} className={this.state.className}>
                <div className="main-dot">
                    <div className="small-dot"></div>
                </div>
            </div>
        );
    }
});

module.exports = DotButton;
