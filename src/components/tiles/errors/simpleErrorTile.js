var React = global.React || require('react');

var RoundButton = React.createClass({
     getDefaultProps: function() {
        return {
            text : 'This is an error'
        };
    },
    propTypes: {
        text: React.PropTypes.string,
    },
    render: function() {
        return (
            <div>
            {this.props.text}
            </div>
        );
    }
});

module.exports = RoundButton;