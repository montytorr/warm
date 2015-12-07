var React = global.React || require('react');

var Column = React.createClass({
    propTypes: {
        array: React.PropTypes.object,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            array : {
                titles: ["Alpha", "Beta", "Gamma", "Teta"],
                content:[
                    ["Lorepsum", "Ipsum", "Lorace", "3290"],
                    ["Hypnal", "Yolemu", "Ceinale", "3290"]
                ]
            },
            customClasses : ''
        };
    },
    render: function() {
        var that = this;
        var i = 0;
        var j = 0;
        if (document.getElementById("w-array_w-column") != null) {
            var w = document.getElementById("w-array_w-column").offsetWidth;
            var width = {
                width: (w / this.props.array.titles.length) + "px"
            }
        }
        return (
            <div id="w-array_w-column" className={"w-array w-column "+this.props.customClasses}>
                <ul>
                    <li key={i++} className="w-column-titles">
                        {
                            that.props.array.titles.map(function (title) {
                                return (
                                    <span key={j++} className="w-column-title" style={width}>{title}</span>
                                );
                            }.bind(this))
                        }
                    </li>
                    {
                        that.props.array.content.map(function (sub) {
                            return (
                                <li key={i++} className="w-line-container">
                                    {
                                        sub.map(function (elem) {
                                            return (
                                                <span key={j++} className="w-line-elem" style={width}>{elem}</span>
                                            );
                                        }.bind(this))
                                    }
                                </li>
                            );
                        }.bind(this))
                    }
                </ul>
            </div>
        );
    }
});

module.exports = Column;
