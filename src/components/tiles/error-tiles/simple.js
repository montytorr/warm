var React = require('react');

var SimpleError = React.createClass({
	propTypes: {
        isVisible: React.PropTypes.bool,
        message: React.PropTypes.string,
    },
    getDefaultProps: function() {
        return {
          isVisible: false,
          message : ''
        };
      }
    render: function() {
        return (
            <p className={(this.props.isVisible== true) ? "warm-error-tile" : "warm-error-tile hidden"}>
	                {this.props.message || ''}
            </p>
        );
    }
});

module.exports = SimpleError;