var React = global.React || require('react');

var Horizontal = React.createClass({
    propTypes: {
        listElements: React.PropTypes.array,
        onClick : React.PropTypes.func,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            listElements: [
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
            onClick: function(){},
            customClasses : ''
        };
    },
    onClick: function(listElement) {
        var that = this;
        return function(){
            that.props.onClick(listElement)
        }
    },
    render: function () {
        var liClassName = "w-list-horizontal-element";
        var label = "all";
        var i = 0;
        return (
            <div className={"w-list w-horizontal "+this.props.customClasses}>
                <ul>
                    {
                        this.props.listElements.map(function(listElement) {
                            liClassName = "w-list-horizontal-element";
                            if(listElement.isActive){
                                liClassName = "w-list-horizontal-element selected"
                            }
                            return (
                                <li
                                    className={liClassName}
                                    key={"w-list-horizontal-element "+(i++)}
                                    onClick={this.onClick(listElement)}>
                                    {listElement.label || listElement.name}
                                </li>
                            );
                        }.bind(this))
                    }
                </ul>
            </div>
        );
    }
});

module.exports = Horizontal;
