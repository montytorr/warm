var React = global.React || require('react');

var Dot = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func,
        customClasses : React.PropTypes.string,
        isChecked : React.PropTypes.bool,
        color : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            onClick: function(){alert("I'm WARM!")},
            customClasses : ''
        }
    },
    render: function() {
        var dotClass = "";
        var style = {}

        if (this.props.isChecked) {
            dotClass = "checked"
        }

        if (this.props.color) {
            style = {
                backgroundColor: this.props.color
            }
        }

        return (
            <div onClick={this.props.onClick} className={dotClass+" w-button w-dot "+this.props.customClasses}>
                <div className={"main-dot"} style={style}>
                </div>
            </div>
        );
    }
});

module.exports = Dot;
