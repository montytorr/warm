var React = global.React || require('react');
var Search = require('../buttons/search');

var Search = React.createClass({
    propTypes: {
        content: React.PropTypes.func,
        onSubmit: React.PropTypes.func,
        placeholder: React.PropTypes.string,
        customClasses: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            content: React.createClass({render: function() {return (<div></div>);}}),
            onSubmit: function(){},
            placeholder: "",
            customClasses : ""
        };
    },
    getInitialState: function() {
        return {
            className : "warm-component w-block w-search "+this.props.customClasses,
            value: ""
        };
    },
    onSubmit: function () {
        this.props.onSubmit(this.state.value);
    },
    handleChange: function (event) {
        this.setState({value: event.target.value});
    },
    render: function () {
        var i = 0;
        return (
            <div className={this.state.className}>
                <div className="w-search-content">
                </div>
                <div className="w-search-form">
                    <input className="w-search-field" type="search" placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange}></input>
                    <Search />
                </div>
            </div>
        );
    }
});

module.exports = Search;
