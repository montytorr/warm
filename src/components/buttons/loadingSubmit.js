    //OLD CODE FOR DEMO
    // getDefaultProps: function() {
    //     return {
    //         isLoading : false,
    //         onClick: function(){},
    //         text : "Go!",
    //         demo : false,
    //         customClasses : ""
    //     };
    // },
    // getInitialState: function () {
    //     return({
    //         loader: this.props.isLoading
    //     });
    // }

var React = global.React || require('react');
var TimerMixin = require('react-timer-mixin');

var LoadingSubmit = React.createClass({
    mixins: [TimerMixin],
    propTypes: {
        isLoading: React.PropTypes.bool,
        onClick : React.PropTypes.func,
        text : React.PropTypes.string,
        demo : React.PropTypes.bool,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            isLoading : false,
            onClick: function(){alert("I'm WARM!")},
            text : "Go!",
            demo : false,
            customClasses : ""
        };
    },

    handleClick: function() {
        this.props.onClick();

    },
    render: function() {
        return (
            <div className={"w-button w-loadingSubmit "+(this.props.isLoading? "loading " : "")+this.props.customClasses} onClick={this.handleClick}>
                <span className={(this.props.isLoading? "w-composant-loader medium" : "")}></span>
                <span className="w-button-loadingSubmit-title">{(this.props.isLoading? "" : this.props.text)}</span>
            </div>
        );
    }
});

module.exports = LoadingSubmit;
