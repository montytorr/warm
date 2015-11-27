var React = global.React || require('react');
var ReactDOM = require('react-dom');


var Simple = React.createClass({
    propTypes: {
        toast : React.PropTypes.object,
        dismissAction: React.PropTypes.func,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            toast : {
                'type' : 'api-reconnected',
                'canStack' : true,
                'template' : 'info',
                'canDismiss' : false,
                'message' : "Toaster info"
            },
            dismissAction: function(){},
            customClasses : ''
        };
    },
    getInitialState: function() {
        return ({
            className : "warm-component w-toasts w-simple "+this.props.customClasses
        });
    },
    timerInterval : null,
    dismissTimeout : null,
    componentDidMount: function() {
        var that = this;
        if(this.props.toast.hasTimer){
            var timerNode = ReactDOM.findDOMNode(that.refs.timer)
            timerNode.textContent = that.props.toast.time;
            clearInterval(that.timerInterval)
            that.timerInterval = setInterval(function(){
                timerNode.textContent = parseInt(timerNode.textContent, 10) - 1;
            }, 1000)
        }
        if(that.props.toast.staysFor){
            clearTimeout(that.dismissTimeout)
            that.dismissTimeout = setTimeout(function(){
                that.props.dismissAction({
                    'toastID' : that.props.toast._id
                });
            }, that.props.toast.staysFor || 5000)
        }
    },
    render: function() {
        var that = this;
        var content =
        <p>
            {this.props.toast.message}
        </p>
        if(this.props.toast.hasTimer){
            content =
            <p>{this.props.toast.message} <span ref="timer">{this.props.toast.time}</span>s</p>
        }
        var className = that.props.toast.template || 'error '
        className = this.state.className+className
        return (
            <div className={className}>
                {content}
            </div>
        );
    }
});

module.exports = Simple;
