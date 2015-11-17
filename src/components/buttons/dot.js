var React = global.React || require('react');

var DotButton = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func
    },
    getDefaultProps: function() {
        return {
            onClick: function() {alert("Dot button clicked!");}
        }
    },
    handleClick: function() {
        this.props.onClick();
    },
    render: function() {
        var that = this;
        return (
            <div onClick={this.handleClick} className="warm-component button-dot">
                <div className="main-dot">
                    <div className="small-dot"></div>
                </div>
            </div>
        );
    }
});

module.exports = DotButton;
