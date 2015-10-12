var React = require('react');
var ReactPropTypes = React.PropTypes;

var RoundButton = React.createClass({
	propTypes: {
        onClickMethod: ReactPropTypes.Function.isRequired,
        text: ReactPropTypes.String.isRequired
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