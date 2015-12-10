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
    },
    _launchtimeout : function(){
        var that = this;
        if(that.props.toast.staysFor){
            clearTimeout(that.dismissTimeout)
            that.dismissTimeout = setTimeout(function(){
                that.props.dismissAction({
                    'toastID' : that.props.toast._id
                });
            }, that.props.toast.staysFor || 5000)
        }
    },
    _onClick : function(){
        var that = this;
        if(that.props.toast.canDismiss){
            this.props.dismissAction({
                'toastID' : this.props.toast._id
            });
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
        this._launchtimeout();
        var className = that.props.toast.template || 'error '
        className = "w-toasts w-simple "+this.props.customClasses+" "+className
        return (
            <div onClick={this._onClick} className={className}>
                {content}
            </div>
        );
    }
});

module.exports = Simple;
