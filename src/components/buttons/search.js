var React = global.React || require('react');

var Search = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            onClick: function() {},
            customClasses : ''
        }
    },
    getInitialState: function() {
        return ({
            className : "warm-component w-button w-search "+this.props.customClasses
        });
    },
    handleClick: function() {
        this.props.onClick();
    },
    render: function() {
        return (
            <div onClick={this.handleClick} className={this.state.className}>
                <span className="w-search-icon" onClick={this.handleClick}></span>
            </div>
        );
    }
});

module.exports = Search;
