var React = global.React || require('react');

var SearchBar = require('./searchBar.js');
var HorizontalList = require('../lists/horizontal.js')

var FilteredSearch = React.createClass({
    propTypes: {
        search: React.PropTypes.object,
        filters: React.PropTypes.array,
        onSubmit : React.PropTypes.func,
        onClickFilter : React.PropTypes.func,
        onUpdateSearch : React.PropTypes.func,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            search : {
                "query" : "toto foo bar"
            },
            filters: [{
                "name" : "all",
                "label" : "all",
                "isActive" : true
            }],
            onSubmit: function(){},
            onClickFilter : function(){},
            onUpdateSearch : function(){},
            customClasses : ""
        };
    },
    getInitialState: function() {
        return {
            className : "warm-component w-block w-filteredSearch "+this.props.customClasses
        };
    },
    render: function () {
        return (
            <div className={this.state.className}>
                <SearchBar search={this.props.search}
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
