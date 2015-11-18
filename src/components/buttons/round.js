var React = global.React || require('react');
var classie = require('classie');

var RoundButton = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func,
        text: React.PropTypes.string,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            onClick: function(){},
            text : '',
            customClasses : ''
        };
    },
    getInitialState: function() {
        return ({
            active: false,
            className : "warm-component w-button w-round "+this.props.customClasses
        });
    },
    handleClick: function() {
        if (this.state.active === true) {
            classie.remove(this.refs.roundButton, 'condensed');
            this.setState({
                active: false
            });
        } else {
            classie.add(this.refs.roundButton, 'condensed');
            this.setState({
                active: true
            });
        }
        this.props.onClick();
    },
    render: function() {
        return (
            <button onClick={this.handleClick} ref="roundButton" className={this.state.className}>
                {this.props.text}
            </button>
        );
    }
});

module.exports = RoundButton;
