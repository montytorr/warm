var React = global.React || require('react');

var Spoiler = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func,
        isActive: React.PropTypes.bool,
        customClasses: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            onClick: function(toto){},
            isActive: false,
            customClasses: ""
        };
    },
    getInitialState: function() {
        return {
            isActive: this.props.isActive
        };
    },
    handleClick: function () {
        this.props.onClick();
        this.setState({
            isActive: !this.state.isActive
        })
    },
    render: function () {
        return (
            <div onClick={this.handleClick} className={"w-button w-spoiler "+(this.state.isActive ? "active " : "")+this.props.customClasses}>
                <div className="w-spoiler-button-container">
                    <div className="w-spoiler-button">
                        <span className="w-spoiler-arrow"></span>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Spoiler;
