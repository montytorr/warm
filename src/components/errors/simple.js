var React = global.React || require('react');

var SimpleErrorTile = React.createClass({
     getDefaultProps: function() {
        return {
            isVisible : true,
            message : 'This is an error',
            isSuccess : false
        };
    },
    propTypes: {
        isVisible: React.PropTypes.bool,
        message: React.PropTypes.string,
        isSuccess : React.PropTypes.bool
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
