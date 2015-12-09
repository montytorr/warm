var React = global.React || require('react');
var DotButton = require('../buttons/dot.js');

var DotList = React.createClass({
    propTypes: {
        list: React.PropTypes.array,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            list : [
                {
                    title : "First list element",
                    subTitle: "Some details about it"
                },
                {
                    title : "Another element",
                    subTitle: "More details?"
                },
                {
                    title : "Last element",
                    subTitle: "Ok that was the last"
                }
            ],
            customClasses : ''
        };
    },
    render: function() {
        var that = this;
        var i = 0;
        return (
            <div className={"w-list w-dot "+this.props.customClasses}>
                {
                    that.props.list.map(function (elem) {
                        return (
                            <li key={i++}>
                                <div className="details-container">
                                    <h1>{elem.title}</h1>
                                    <h2>{elem.subTitle}</h2>
                                </div>
                                <div className="dot-container">
                                    <DotButton></DotButton>
                                </div>
                            </li>
                        );
                    })
                }
            </div>
        );
    }
});

module.exports = DotList;
