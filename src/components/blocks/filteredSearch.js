var React = global.React || require('react');

var SearchBar = require('./searchBar.js');
var HorizontalList = require('../lists/horizontal.js')

var FilteredSearch = React.createClass({
    propTypes: {
        search: React.PropTypes.object,
        filters: React.PropTypes.array,
        onSubmit : React.PropTypes.func,
        isLoading: React.PropTypes.bool,
        onClickFilter : React.PropTypes.func,
        onUpdateSearch : React.PropTypes.func,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            search : {
                "query" : "toto foo bar"
            },
            filters: [
                {
                    "name" : "All",
                    "label" : "All",
                    "isActive" : true
                },
                {
                    "name" : "Alpha",
                    "label" : "Alpha",
                    "isActive" : false
                },
                {
                    "name" : "Beta",
                    "label" : "Beta",
                    "isActive" : false
                }
            ],
            onSubmit: function(){},
            isLoading: false,
            onClickFilter : function(){},
            onUpdateSearch : function(){},
            customClasses : ""
        };
    },
    render: function () {
        return (
            <div className={"w-block w-filteredSearch "+this.props.customClasses}>
                <SearchBar search={this.props.search}
                    isLoading={this.props.isLoading}
                    onSubmit={this.props.onSubmit}
                    onUpdate={this.props.onUpdateSearch}
                    withLoader={true}
                    customClasses="w-search-bar-in-filteredSearch"/>
                <HorizontalList listElements={this.props.filters} onClick={this.props.onClickFilter}/>
            </div>
        );
    }
});

module.exports = FilteredSearch;
