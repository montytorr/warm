var React = global.React || require('react');

var DotButton = React.createClass({
    handleClick: function() {
        if (this.props.onClick == undefined) {
            alert("Dot button clicked!");
        } else {
            this.props.onClick();
        }
    },
    propTypes: {
        onClick: React.PropTypes.func
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
