var React = global.React || require('react');

var Simple = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func,
        text: React.PropTypes.string,
        customClasses : React.PropTypes.string,
        color: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            onClick: function() {alert("I'm WARM!")},
            text : 'Click me',
            customClasses : ''
        }
    },
    handleClick: function() {
        this.props.onClick();
    },
    render: function() {
        var style = {}

        if (this.props.color) {
            style = {
                backgroundColor: this.props.color
            }
        }

        return (
            <button onClick={this.handleClick} className={"w-button w-simple "+this.props.customClasses} style={style}>
              {this.props.text}
            </button>
        );
    }
});

module.exports = Simple;
