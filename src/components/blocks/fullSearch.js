var React = global.React || require('react');
var Accordion = require('../lists/accordion.js');
var Surface = require('./surface.js');
var FilteredSearch = require('./filteredSearch.js');

var FullSearch = React.createClass({
    propTypes: {
        results :  React.PropTypes.array,
        search: React.PropTypes.object,
        filters: React.PropTypes.array,
        endComponents: React.PropTypes.object,
        onSubmit : React.PropTypes.func,
        isLoading: React.PropTypes.bool,
        onClickHeader : React.PropTypes.func,
        isLoadingMore :  React.PropTypes.bool,
        hasLoadedAll :  React.PropTypes.bool,
        onClickFilter : React.PropTypes.func,
        onUpdateSearch : React.PropTypes.func,
        onClickResult : React.PropTypes.func,
        onClickButton : React.PropTypes.func,
        buttonText : React.PropTypes.string,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            search: {
                "query" : "toto foo bar"
            },
            isLoadingMore : false,
            results: [],
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
            endComponents : {
                "all" : {}
            },
            isLoading: false,
            hasLoadedAll: false,
            onClickHeader : function(){},
            onClickResult : function(){},
            onSubmit: function(){},
            onClickFilter : function(){},
            onUpdateSearch : function(){},
            onClickButton : function(){},
            buttonText : "not_set",
            customClasses : ""
        };
    },
    render: function() {
        var that = this;

        return (
            <div className={"w-block w-full " + this.props.customClasses}>
                <Surface
                    content={FilteredSearch}
                    customClasses="search-surface"
                    search={that.props.search}
                    filters={that.props.filters}
                    onSubmit={that.props.onSubmit}
                    isLoading={that.props.isLoading}
                    demo={that.props.demo}
                    onClickFilter={that.props.onClickFilter}
                    onUpdateSearch={that.props.onUpdateSearch}/>
                <Surface
                    content={Accordion}
                    customClasses="results-surface"
                    data={that.props.search.results}
                    headers={that.props.filters}
                    endComponents={that.props.endComponents}
                    summary={that.props.search.summary}
                    isLoading={that.props.isLoading}
                    onClickResult={that.props.onClickResult}
                    onClickHeader={that.props.onClickHeader}
                    onClickButton={that.props.onClickButton}
                    isLoadingMore={that.props.isLoadingMore}
                    hasLoadedAll={that.props.hasLoadedAll}
                    demo={that.props.demo}
                    buttonText={that.props.buttonText}/>
            </div>
        );
    }
});

module.exports = FullSearch;
