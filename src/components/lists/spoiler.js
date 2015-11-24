var React = global.React || require('react');

var SpoilerButton = require('../buttons/spoiler');
var Column = require('../arrays/column');

var Spoiler = React.createClass({
    propTypes: {
        list: React.PropTypes.array,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            list : [
                {
                    title : "Alpha",
                    content: Column,
                    isActive: true,
                    color: "#63AFFF"
                },
                {
                    title : "Beta",
                    content: Column,
                    isActive: false
                },
                {
                    title : "Gamma",
                    content: Column,
                    isActive: false,
                    color: "#50D86E"
                }
            ],
            customClasses : ''
        };
    },
    getInitialState: function() {
        return ({
            list: this.props.list,
            className : "warm-component w-list w-spoiler "+this.props.customClasses
        });
    },
    spoil: function (index) {
        console.log(this, index);
        var temp = this.state.list;
        if (temp[index].isActive == true) {
            temp[index].isActive = false;
            this.setState({
                list: temp
            })
        } else {
            temp[index].isActive = true;
            this.setState({
                list: temp
            })
        }
    },
    render: function() {
        var that = this;
        var i = 0;
        var j = 0;
        return (
            <div className={this.state.className}>
                <ul>
                    {
                        that.state.list.map(function (elem) {
                            var content = React.createFactory(elem.content);
                            var className = "";
                            if (elem.isActive == true) {
                                className = "w-spoiled-content active"
                            } else {
                                className = "w-spoiled-content"
                            }
                            var color = {
                                "backgroundColor": elem.color
                            };
                            return (
                                <li key={i++} ref={j++}>
                                    <div className="w-spoiler-title-container" style={color}>
                                        <SpoilerButton
                                            onClick={this.spoil.bind(this, j-1)}
                                            isActive={elem.isActive} />
                                        <span className="w-spoiler-title">{elem.title}</span>
                                    </div>
                                    <div className={className}>
                                        {content()}
                                    </div>
                                </li>
                            );
                        }.bind(this))
                    }
                </ul>
            </div>
        );
    }
});

module.exports = Spoiler;
