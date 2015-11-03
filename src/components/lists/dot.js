var React = global.React || require('react');
var DotButton = require('../buttons/dotButton.js');

var DotList = React.createClass({
    getInitialState: function() {
        if (this.props.list == undefined) {
            return ({
                list: [
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
                ]
            });
        } else {
            return ({
                list: this.props.list
            });
        }
    },
    render: function() {
        var that = this;
        var i = 0;
        return (
            <div className="warm-component list-dot">
                {
                    that.state.list.map(function (elem) {
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
