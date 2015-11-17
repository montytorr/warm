var React = global.React || require('react');
var classie = require('classie');

var RoundButton = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func,
        text: React.PropTypes.string,
        customClass : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            onClick: function(){},
            text : '',
            customClass : ''
        };
    },
    getInitialState: function() {
        return ({
            active: false
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
        var className = "warm-component warm-button round "+this.props.customClass;
        return (
            <button onClick={this.handleClick} ref="roundButton" className={className}>
                {this.props.text}
            </button>
        );
    }
});

module.exports = RoundButton;
