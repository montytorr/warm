var React = global.React || require('react');

var Simple = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func,
        text: React.PropTypes.string,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            onClick: function() {},
            text : 'Click me',
            customClasses : ''
        }
    },
    handleClick: function() {
        this.props.onClick();
    },
    render: function() {
        return (
            <button onClick={this.handleClick} className={"w-button w-simple "+this.props.customClasses}>
              {this.props.text}
            </button>
        );
    }
});

module.exports = Simple;
