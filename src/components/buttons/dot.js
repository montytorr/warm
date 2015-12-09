var React = global.React || require('react');

var Dot = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            onClick: function() {},
            customClasses : ''
        }
    },
    handleClick: function() {
        this.props.onClick();
    },
    render: function() {
        return (
            <div onClick={this.handleClick} className={"w-button w-dot "+this.props.customClasses}>
                <div className="main-dot">
                    <div className="small-dot"></div>
                </div>
            </div>
        );
    }
});

module.exports = Dot;
