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
            onClick: function(){},
            text : "Go!",
            demo : false,
            customClasses : ""
        };
    },
    getInitialState: function () {
        return({
            loader: this.props.isLoading
        });
    },
    handleClick: function() {
        this.props.onClick();
        if (this.props.demo) {
            this.setState({
                loader: !this.state.loader
            });
            this.setTimeout(function () {
                this.setState({
                    loader: !this.state.loader
                });
            }, 700)
        }
    },
    render: function() {
        return (
            <div className={"w-button w-loadingSubmit "+(this.state.loader ? "loading " : "")+this.props.customClasses} onClick={this.handleClick}>
                <span className={(this.state.loader ? "w-composant-loader medium" : "")}></span>
                <span className="w-button-loadingSubmit-title">{(this.state.loader ? "" : this.props.text)}</span>
            </div>
        );
    }
});

module.exports = LoadingSubmit;
