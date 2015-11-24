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
    getInitialState: function() {
        return ({
            array: this.props.array,
            className : "warm-component w-array w-column "+this.props.customClasses
        });
    },
    render: function() {
        var that = this;
        var i = 0;
        var j = 0;
        if (document.getElementById("warm-component_w-array_w-column") != null) {
            var w = document.getElementById("warm-component_w-array_w-column").offsetWidth;
            var width = {
                width: (w / this.state.array.titles.length) + "px"
            }
        }
        return (
            <div id="warm-component_w-array_w-column" className={this.state.className}>
                <ul>
                    <li key={i++} className="w-column-titles">
                        {
                            that.state.array.titles.map(function (title) {
                                return (
                                    <span key={j++} className="w-column-title" style={width}>{title}</span>
                                );
                            }.bind(this))
                        }
                    </li>
                    {
                        that.state.array.content.map(function (sub) {
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
