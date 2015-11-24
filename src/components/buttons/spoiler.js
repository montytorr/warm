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
            isActive: this.props.isActive,
            className : "warm-component w-button w-spoiler "+(this.props.isActive ? "active " : "")+this.props.customClasses
        };
    },
    handleClick: function () {
        this.props.onClick();
        if (this.state.isActive == true) {
            this.setState({
                isActive: false,
                className : "warm-component w-button w-spoiler "+this.props.customClasses
            })
        } else {
            this.setState({
                isActive: true,
                className : "warm-component w-button w-spoiler active "+this.props.customClasses
            })
        }
    },
    render: function () {
        return (
            <div onClick={this.handleClick} className={this.state.className}>
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
