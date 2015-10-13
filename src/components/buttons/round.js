var React = require('react');

var RoundButton = React.createClass({
	propTypes: {
        onClickMethod: React.PropTypes.func.isRequired,
        text: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            <button onClick={this.onClickMethod} className="warm-button round">
            {text}
            </button>
        );
    }
});

module.exports = RoundButton;