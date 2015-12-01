var React = require('react');

var LoadingSubmit = React.createClass({
    propTypes: {
        isLoading: React.PropTypes.bool,
        onClick : React.PropTypes.func,
        text : React.PropTypes.string,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            isLoading : false,
            onClickMethod: function(){},
            text : "",
            customClasses : ""
        };
    },
    getInitialState: function() {
        return ({
            className : "warm-component w-button w-loadingSubmit "+this.props.customClasses,
            loaderClassName : "",
            text : this.props.text
        });
    },
    handleClick: function() {
        this.props.onClick();
    },
    componentWillReceiveProps: function(nextProps) {
        if (nextProps.isLoading) {
            this.setState({
                className : "warm-component w-button w-loadingSubmit loading "+nextProps.customClasses,
                loaderClassName : "w-composant-loader medium",
                text : ""
            })
        } else {
            this.setState({
                className : "warm-component w-button w-loadingSubmit "+nextProps.customClasses,
                loaderClassName : "",
                text : nextProps.text
            })
        }
    },
    render: function() {
        return (
            <div className={this.state.className} onClick={this.handleClick}>
                <span className={this.state.loaderClassName}></span>
                <span className="w-button-loadingSubmit-title">{this.state.text}</span>
            </div>
        );
    }
});

module.exports = LoadingSubmit;
