var React = global.React || require('react');
var Toast = require('../toasts/simple.js')
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Simple = React.createClass({
    propTypes: {
        toasts: React.PropTypes.array,
        dismissAction : React.PropTypes.func,
        demo : React.PropTypes.bool,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            toasts: [
                {
                    'type' : 'api-deconnection',
                    'canStack' : true,
                    'template' : 'error',
                    'canDismiss' : false,
                    'message' : "Lost connexion"
                },
                {
                    'type' : 'api-connection-attempt',
                    'canStack' : true,
                    'template' : 'warning',
                    'canDismiss' : false,
                    'message' : "Try to reconnect"
                },
                {
                    'type' : 'api-reconnected',
                    'canStack' : true,
                    'template' : 'success',
                    'canDismiss' : false,
                    'message' : "Reconnected sucessfuly",
                },
                {
                    'type' : 'api-reconnected',
                    'canStack' : true,
                    'template' : 'info',
                    'canDismiss' : false,
                    'message' : "Toaster info"
                }
            ],
            dismissAction: function(){},
            demo : false,
            customClasses : ''
        };
    },
    render: function() {
        var that = this;
        var i = 0;
        return (
            <div className={"w-toasters w-simple "+(this.props.demo ? "w-demo " : "")+this.props.customClasses}>
                <ReactCSSTransitionGroup transitionName="toast-anim" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    {that.props.toasts.map(function(toast) {
                        return (
                            <Toast
                                key={i++}
                                toast={toast}
                                dismissAction={that.props.dismissAction}/>
                        );
                    }, that)}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

module.exports = Simple;
