var React = global.React || require('react');

var SimpleErrorTile = React.createClass({
    propTypes: {
        isVisible: React.PropTypes.bool,
        message: React.PropTypes.string,
        isSuccess : React.PropTypes.bool,
        customClasses : React.PropTypes.string
    },
     getDefaultProps: function() {
        return {
            isVisible : true,
            message : 'This is an error',
            isSuccess : false,
            customClasses : ''
        };
    },
    getInitialState: function() {
        return ({
            className : "warm-component w-error w-simple "+(this.props.isVisible ? "visible " : "hidden ")+(this.props.isSuccess ? "isSuccess " : "")+this.props.customClasses
        });
    },
    render: function() {
        return (
            <p className={this.state.className}>
              {this.props.message}
          </p>
        );
    }
});

module.exports = SimpleErrorTile;
