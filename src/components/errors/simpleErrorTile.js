var React = global.React || require('react');

var SimpleErrorTile = React.createClass({
     getDefaultProps: function() {
        return {
            isVisible : false,
            message : 'This is an error'
        };
    },
    propTypes: {
        isVisible: React.PropTypes.bool,
        message: React.PropTypes.string,
    },
    render: function() {
        var dynamicClassName = this.props.isVisible ? "visible" : "hidden";
        dynamicClassName += ' warm-error-tile';
        return (
            <p className={dynamicClassName}>
              {this.props.message}
          </p>
        );
    }
});

module.exports = SimpleErrorTile;
