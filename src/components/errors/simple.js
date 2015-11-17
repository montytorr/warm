var React = global.React || require('react');

var SimpleErrorTile = React.createClass({
    propTypes: {
        isVisible: React.PropTypes.bool,
        message: React.PropTypes.string,
        isSuccess : React.PropTypes.bool
    },
     getDefaultProps: function() {
        return {
            isVisible : true,
            message : 'This is an error',
            isSuccess : false
        };
    },
    render: function() {
        var dynamicClassName = this.props.isVisible ? "visible" : "hidden";
        dynamicClassName += ' warm-error-tile ' + (this.props.isSuccess ? "isSuccess" : "");
        return (
            <p className={dynamicClassName}>
              {this.props.message}
          </p>
        );
    }
});

module.exports = SimpleErrorTile;
