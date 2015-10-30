var React = global.React || require('react');
var classie = require('classie');

var RoundButton = React.createClass({
    getInitialState: function() {
        return ({
            active: false
        });
    },
    getDefaultProps: function() {
        return {
            onClickMethod: function(){},
            text : '',
            customClass : ''
        };
    },
    handleClick: function() {
        if (this.state.active == true) {
            classie.remove(this.refs.roundButton, 'round-active');
            this.setState({
                active: false
            });
        } else {
            classie.add(this.refs.roundButton, 'round-active');
            this.setState({
                active: true
            });
        }
        this.props.onClickMethod();
    },
    propTypes: {
        onClickMethod: React.PropTypes.func,
        text: React.PropTypes.string,
        customClass : React.PropTypes.string
    },
    render: function() {
        var className = "warm-component button-round "+this.props.customClass
        return (
            <button onClick={this.handleClick} ref="roundButton" className={className}>
                {this.props.text}
            </button>
        );
    }
});

module.exports = RoundButton;
