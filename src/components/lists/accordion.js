var React = global.React || require('react');

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
        this.props.onClickResult(this.props.element)
    },
    render: function() {
        return (
            <li className="accordion-list-element" onClick={this._onClick}>
                {JSON.stringify(this.props.element)}
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
        if(e.currentTarget.className.indexOf("open") !== -1){
            e.currentTarget.className = e.currentTarget.className.replace( /(?:^|\s)open(?!\S)/g , ' closed ' )
        }
        else{
            e.currentTarget.className = e.currentTarget.className.replace( /(?:^|\s)closed(?!\S)/g , ' open ' )
        }

    },
    onHeaderButtonClick : function(event){
        var that = this;
        var headerElement = document.querySelector(".w-accordion-header."+that.props.header.name)
        headerElement.className = headerElement.className.replace( /(?:^|\s)closed(?!\S)/g , ' open ' )
        that.props.onClickButton(this.props.header);
    },
    render: function() {
        var toggleClass = "closed"
        if(this.props.isOpen){
            toggleClass = "open"
        }
        var style = {
            color: this.props.header.color
        };
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
            loadingMoreComposant = <div className="w-accordion-no-more">NO MORE ELEMENT TO GET</div>
        }
        return (
            <li className={"w-accordion-header " + toggleClass + " " + this.props.header.name} key={"w-accordion-header-" + this.props.header.name} onClick={this.toggleOpen}>
                <div className="w-accordion-head" style={style}>
                    <span className="w-accordion-header-key">{this.props.header.label}</span>
                    <span className="w-accordion-header-count">{this.props.count}</span>
                    {headerButton}
                </div>
                <ul className="w-accordion-content">
                    {
                        this.props.listData.map(function(listElement) {
                            return (
                                <AccordionListElement
                                    key={listElement._id}
                                    element={listElement}
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
    propTypes: {
        data: React.PropTypes.object,
        summary: React.PropTypes.object,
        headers: React.PropTypes.array,
        isLoading: React.PropTypes.bool,
        isLoadingMore :  React.PropTypes.bool,
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
    getInitialState: function() {
        return ({
            list: this.props.list,
            className : "w-list w-accordion "+this.props.customClasses
        });
    },
    loadingDisplay: function () {
        var i = 0;
        if (!this.props.isLoading) {
            var acccordionListHeaders = []
            this.props.headers.map(function(header, index) {
                var isActive = false;
                if (this.props.data[header.name] !== undefined && this.props.data[header.name].length > 0) {
                    i++;
                    if (i === 1) {
                        isActive = true
                    }
                    acccordionListHeaders.push(
                        <AccordionListHeader
                            key={"accordion-header-" + header.name}
                            isLoadingMore={this.props.isLoadingMore}
                            hasLoadedAll={this.props.hasLoadedAll}
                            onClickHeader={this.props.onClickHeader}
                            onClickResult={this.props.onClickResult}
                            onClickButton={this.props.onClickButton}
                            buttonText={this.props.buttonText}
                            header={header}
                            count={this.props.summary[header.name]}
                            isOpen={isActive}
                            listData={this.props.data[header.name]} />
                    );
                }
            }.bind(this))
            return (acccordionListHeaders);
        } else {
            return (
                <div className="w-accordion-loader">
                    <span className="w-accordion-loader-text">LIST LOADING...</span>
                    <span className="w-composant-loader medium"></span>
                </div>
            );
        }
    },
    render: function() {
        return (
            <div className={this.state.className}>
                {
                    (this.props.data !== null && Object.keys(this.props.data).length > 0) ? (
                        <ul className="w-accordion-headers-container">
                            {this.loadingDisplay()}
                        </ul>
                    ) : (
                        <span className="w-accordion-void">NO RESULTS</span>
                    )
                }
            </div>
        );
    }
});

module.exports = Accordion;
