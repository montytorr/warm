var React = require('react');
var ReactPropTypes = React.PropTypes;

var SimpleError = React.createClass({
	propTypes: {
        isVisible: ReactPropTypes.Boolean.isRequired,
        message: ReactPropTypes.String.isRequired,
    },
    render: function() {
        return (
            <p className={(this.props.isVisible== true) ? "warm-error-tile" : "warm-error-tile hidden"}>
	                {this.props.content}
            </p>
        );
    }
});

module.exports = SimpleError;