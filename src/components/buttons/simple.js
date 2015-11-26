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
    getInitialState: function() {
        return ({
            className : "warm-component w-button w-simple "+this.props.customClasses
        });
    },
    handleClick: function() {
        this.props.onClick();
    },
    render: function() {
        return (
            <button onClick={this.handleClick} className={this.state.className}>
              {this.props.text}
            </button>
        );
    }
});

module.exports = Simple;
