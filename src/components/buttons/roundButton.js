var React = global.React || require('react');

var RoundButton = React.createClass({
    getDefaultProps: function() {
        return {
            onClickMethod: function(){},
            text : '',
            customClass : ''
        };
    },
    propTypes: {
        onClickMethod: React.PropTypes.func,
        text: React.PropTypes.string,
        customClass : React.PropTypes.string
    },
    render: function() {
        var className = "warm-button round "+this.props.customClass
        return (
            <button onClick={this.props.onClickMethod} className={className}>
                {this.props.text}
            </button>
        );
    }
});

module.exports = RoundButton;
