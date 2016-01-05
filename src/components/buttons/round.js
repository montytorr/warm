var React = global.React || require('react');

var RoundButton = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func,
        text: React.PropTypes.string,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            onClick: function(){alert("I'm WARM!")},
            text : '',
            customClasses : ''
        };
    },
    getInitialState: function() {
        return ({
            active: false
        });
    },
    handleClick: function() {
        this.setState({
            active: !this.state.active
        });
        this.props.onClick();
    },
    render: function() {
        return (
            <button
                onClick={this.handleClick}
                ref="roundButton"
                className={"w-button w-round "+((this.state.active)?"condensed ":"")+this.props.customClasses}>
                {this.props.text}
            </button>
        );
    }
});

module.exports = RoundButton;
