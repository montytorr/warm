var React = global.React || require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var AccordionListElement = React.createClass({
    propTypes: {
        element : React.PropTypes.object,
        onClickResult : React.PropTypes.func
    },
    getDefaultProps: function() {
        return {
            element : {},
            onClickResult : function(){}
        };
    },
    _onClick : function(event){
        event.stopPropagation();
        this.props.onClickResult(this.props.element);
    },
    render: function() {
        var content = JSON.stringify(this.props.element);
        var className = "accordion-list-element";

        if(this.props.component){
            className += " container";
            content = <this.props.component element={this.props.element}/>;
        }
        return (
            <li className={className} onClick={this._onClick}>
                {content}
            </li>
        );
    }
});

var AccordionListHeader = React.createClass({
    propTypes: {
        summary: React.PropTypes.number,
        listData: React.PropTypes.array,
        header: React.PropTypes.object,
        isOpen : React.PropTypes.bool,
        isLoadingMore :  React.PropTypes.bool,
        onClickHeader : React.PropTypes.func,
        onClickButton : React.PropTypes.func,
        onClickResult : React.PropTypes.func,
        buttonText : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            count : 0,
            isLoadingMore : false,
            listData: [],
            header: {
                "name" : "all",
                "label" : "all",
                "isActive" : true,
                "color" : "#BD1622"
            },
            isOpen : false,
            onClickHeader: function(){},
            onClickButton : function(){},
            onClickResult: function(){},
            buttonText : "not_set",
        };
    },
    toggleOpen : function(e){
        this.props.onClickHeader({"name": this.props.header.name})
    },
    onHeaderButtonClick : function(event){
        var that = this;
        var headerElement = document.querySelector(".w-accordion-header."+that.props.header.name)
        headerElement.className = headerElement.className.replace( /(?:^|\s)closed(?!\S)/g , ' open ' )
        that.props.onClickButton(this.props.header);
    },
    render: function() {
        var toggleClass = "closed"
        var style = {
            backgroundColor: this.props.header.color
        };
        if(this.props.header.isOpen){
            toggleClass = "open";
            style = {
                color: '#FFF',
                backgroundColor: this.props.header.color
            };
        }

        var headerButton = ""
        if(this.props.buttonText !== "not_set"){
            headerButton = (
                <Warm.buttons.Simple
                    onClick={this.onHeaderButtonClick}
                    text={this.props.buttonText}
                    customClasses="w-accordion-more-button"/>
            )
        }
        var loadingMoreComposant = ''
        if(this.props.isLoadingMore && !this.props.hasLoadedAll){
            loadingMoreComposant = (
                <div className="w-accordion-more-loader">
                    <span className="w-composant-loader medium"></span>
                </div>
            );
        }
        if(this.props.hasLoadedAll)
        {
            loadingMoreComposant = <div className="w-accordion-no-more">Toutes les elements sont chargé</div>
        }
        return (
            <li className={"w-accordion-header " + toggleClass + " " + this.props.header.name} key={"w-accordion-header-" + this.props.header.name} onClick={this.toggleOpen}>
                <div className="w-accordion-head" style={style}>
                    <span className="w-accordion-header-key">{this.props.header.label}</span>
                    <span className="w-accordion-header-count">({this.props.count})</span>
                    {headerButton}
                </div>
                <ul className="w-accordion-content">
                    {
                        this.props.listData.map(function(listElement) {
                            return (
                                <AccordionListElement
                                    key={listElement._id}
                                    element={listElement}
                                    component={this.props.endComponent}
                                    onClickResult={this.props.onClickResult}/>
                            );
                        }.bind(this))
                    }
                    {loadingMoreComposant}
                </ul>
            </li>
        );

    }

});

var Accordion = React.createClass({
    baseClassName : "w-list w-accordion",
    propTypes: {
        data: React.PropTypes.object,
        summary: React.PropTypes.object,
        endComponents : React.PropTypes.object,
        headers: React.PropTypes.array,
        isLoading: React.PropTypes.bool,
        isLoadingMore :  React.PropTypes.bool,
        openAll : React.PropTypes.bool,
        hasLoadedAll :  React.PropTypes.bool,
        onClickHeader: React.PropTypes.func,
        onClickResult: React.PropTypes.func,
        onClickButton: React.PropTypes.func,
        buttonText: React.PropTypes.string,
        customClasses: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            data: {},
            endComponents: {},
            headers: [
                {
                    "name": "all",
                    "label": "all",
                    "isActive": true,
                    "color": "#BD1622"
                }
            ],
            summary: {
                "all": null
            },
            isLoadingMore : false,
            isLoading: false,
            hasLoadedAll : false,
            onClickHeader: function() {},
            onClickResult: function() {},
            onClickButton: function() {},
            buttonText: "not_set",
            customClasses: ""
        };
    },
    loadingDisplay: function () {
        var i = 0;
        if (!this.props.isLoading) {
            var accordionListHeaders = []
            this.props.headers.map(function(header, index) {
                if (this.props.data[header.name] !== undefined && this.props.data[header.name].length > 0) {
                    var endComponent = this.props.endComponents[header.name] || undefined;

                    accordionListHeaders.push(
                        <AccordionListHeader
                            key={"accordion-header-" + header.name}
                            isLoadingMore={this.props.isLoadingMore}
                            endComponent={endComponent}
                            hasLoadedAll={this.props.hasLoadedAll}
                            onClickHeader={this.props.onClickHeader}
                            onClickResult={this.props.onClickResult}
                            onClickButton={this.props.onClickButton}
                            buttonText={this.props.buttonText}
                            header={header}
                            count={this.props.summary[header.name]}
                            listData={this.props.data[header.name]} />
                    );
                }
            }.bind(this))
            return (accordionListHeaders);
        } else {
            return (
                <div className="w-accordion-loader">
                    <span className="w-accordion-loader-text">Chargement...</span>
                    <span className="w-composant-loader medium"></span>
                </div>
            );
        }
    },
    render: function() {
        return (
            <div className={this.baseClassName+" "+this.props.customClasses}>
                {
                    (this.props.data !== null && Object.keys(this.props.data).length > 0) ? (
                        <ul className="w-accordion-headers-container">
                            {this.loadingDisplay()}
                        </ul>
                    ) : (
                        <span className="w-accordion-void">Aucun resultats</span>
                    )
                }
            </div>
        );
    }
});

module.exports = Accordion;
