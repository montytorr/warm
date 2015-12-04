var React = global.React || require('react');
var Accordion = require('../lists/accordion.js');
var Surface = require('./surface.js');
var FilteredSearch = require('./filteredSearch.js');

var FullSearch = React.createClass({
    propTypes: {
        results :  React.PropTypes.array,
        search: React.PropTypes.object,
        filters: React.PropTypes.array,
        onSubmit : React.PropTypes.func,
        isLoading: React.PropTypes.bool,
        isLoadingMore :  React.PropTypes.bool,
        hasLoadedAll :  React.PropTypes.bool,
        onClickFilter : React.PropTypes.func,
        onUpdateSearch : React.PropTypes.func,
        onClickResult : React.PropTypes.func,
        onClickButton : React.PropTypes.func,
        buttonText : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            search: {
                "query" : "toto foo bar"
            },
            isLoadingMore : false,
            results: [],
            filters: [{
                "name" : "all",
                "label" : "all",
                "isActive" : true,
                "color" : "#BD1622"
            }],
            isLoading: false,
            hasLoadedAll: false,
            onClickResult : function(){},
            onSubmit: function(){},
            onClickFilter : function(){},
            onUpdateSearch : function(){},
            onClickButton : function(){},
            buttonText : "not_set",
        };
    },
    render: function() {
        var that = this;
        return (
            <div className="w-full w_h-d_b">
                <FilteredSearch
                    search={that.props.search}
                    filters={that.props.filters}
                    onSubmit={that.props.onSubmit}
                    isLoading={that.props.isLoading}
                    onClickFilter={that.props.onClickFilter}
                    onUpdateSearch={that.props.onUpdateSearch}/>
                <Accordion
                    data={that.props.search.results}
                    headers={that.props.filters}
                    summary={that.props.search.summary}
                    isLoading={that.props.isLoading}
                    onClickResult={that.props.onClickResult}
                    onClickHeader={that.props.onClickFilter}
                    onClickButton={that.props.onClickButton}
                    isLoadingMore={that.props.isLoadingMore}
                    hasLoadedAll={that.props.hasLoadedAll}
                    buttonText={that.props.buttonText}/>
            </div>
        );
    }
});

module.exports = FullSearch;
