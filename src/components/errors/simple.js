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
    render: function() {
        var classNameString = "w-error w-simple "+(this.props.isVisible ? "visible " : "hidden ")+(this.props.isSuccess ? "isSuccess " : "")+this.props.customClasses
        return (
            <p className={classNameString}>
              {this.props.message}
          </p>
        );
    }
});

module.exports = SimpleErrorTile;
