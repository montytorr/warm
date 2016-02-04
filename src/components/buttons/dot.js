var React = global.React || require('react');

var Dot = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func,
        customClasses : React.PropTypes.string,
        isChecked : React.PropTypes.bool
    },
    getDefaultProps: function() {
        return {
            onClick: function(){alert("I'm WARM!")},
            customClasses : ''
        }
    },
    render: function() {
        var dotClass = "";

        if (this.props.isChecked) {
            dotClass = "main-dot"
        }

        return (
            <div onClick={this.props.onClick} className={"w-button w-dot "+this.props.customClasses}>
                <div className={dotClass}>
                    <div className="small-dot"></div>
                </div>
            </div>
        );
    }
});

module.exports = Dot;
