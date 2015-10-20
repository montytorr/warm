var React = global.React || require('react');

var Mock1Button = React.createClass({
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
            <button onClick={this.props.onClickMethod} className="warm-button mock1">
                {this.props.text}
            </button>
        );
    }
});

module.exports = Mock1Button;