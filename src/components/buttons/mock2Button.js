var React = global.React || require('react');

var Mock2Button = React.createClass({
    getDefaultProps: function() {
        return {
            onClickMethod: function(){},
            text : ''
        };
    },
    propTypes: {
        onClickMethod: React.PropTypes.func,
        text: React.PropTypes.string
    },
    render: function() {
        return (
            <button onClick={this.props.onClickMethod} className="warm-button mock2">
                {this.props.text}
            </button>
        );
    }
});

module.exports = Mock2Button;