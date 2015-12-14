var React = global.React || require('react');

var Search = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            onClick: function() {alert("I'm WARM!")},
            customClasses : ''
        }
    },
    handleClick: function() {
        this.props.onClick();
    },
    render: function() {
        return (
            <div onClick={this.handleClick} className={"w-button w-search "+this.props.customClasses}>
                <span className="w-search-icon" onClick={this.handleClick}></span>
            </div>
        );
    }
});

module.exports = Search;
