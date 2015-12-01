var React = global.React || require('react');

var SearchButton = require('../buttons/search');
var SearchButtonLoader = require('../buttons/loadingSubmit');

var Search = React.createClass({
    propTypes: {
        search: React.PropTypes.object,
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
    search: function() {
        this.props.onSubmit();
    },
    render: function () {
        var i = 0;
        var Submit = (
            <SearchButtonLoader
                onClick={this.search} text="Go" isLoading={this.props.search.isSearching} />
        );
        if (this.props.withLoader == false) {
            Submit = (
                <SearchButton
                    onClick={this.onSubmit} />
            )
        }
        return (
            <div className={this.state.className}>
                <div className="w-search-form">
                    <input className="w-search-field"
                        type="search"
                        placeholder={this.props.placeholder}
                        value={this.props.search.query}
                        ref="searchBarSearchInput"
                        onChange={this.formChange(event)}>
                    </input>
                    {Submit}
                </div>
            </div>
        );
    }
});

module.exports = Search;
