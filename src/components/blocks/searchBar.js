var React = global.React || require('react');

var SearchButton = require('../buttons/search');
var SearchButtonLoader = require('../buttons/loadingSubmit');

var Search = React.createClass({
    propTypes: {
        search: React.PropTypes.object,
        isLoading: React.PropTypes.bool,
        onSubmit: React.PropTypes.func,
        onUpdate: React.PropTypes.func,
        placeholder: React.PropTypes.string,
        withLoader: React.PropTypes.bool,
        customClasses: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            search : {
                "query" : "toto foo bar"
            },
            isLoading: false,
            onSubmit: function(){},
            onUpdate: function(){},
            withLoader: true,
            placeholder: "Search for something",
            customClasses : ""
        };
    },
    getInitialState: function() {
        return {
            className : "warm-component w-block w-searchBar "+this.props.customClasses
        };
    },
    formChange : function(){
        var that = this;
        return function(event){
            if(that.refs.searchBarSearchInput){
                that.props.onUpdate({"query": that.refs.searchBarSearchInput.value});
            }
        }
    },
    search: function(event) {
        if (event != undefined) {
            event.preventDefault();
        }
        this.props.onSubmit(this.props.search.query);
    },
    render: function () {
        var i = 0;
        var Submit = (
            <SearchButtonLoader
                onClick={this.search} text="Go" isLoading={this.props.isLoading} />
        );
        if (this.props.withLoader == false) {
            Submit = (
                <SearchButton
                    onClick={this.onSubmit} />
            )
        }
        return (
            <div className={this.state.className}>
                <form onSubmit={this.search} className="w-search-form">
                    <input className="w-search-field"
                        type="search"
                        placeholder={this.props.placeholder}
                        value={this.props.search.query}
                        ref="searchBarSearchInput"
                        onChange={this.formChange(event)}>
                    </input>
                    {Submit}
                </form>
            </div>
        );
    }
});

module.exports = Search;
