var React = global.React || require('react');
var classie = require('classie');

var mockInfo = React.createClass({
    render: function() {
        return (
            <p>Hello World</p>
        );
    }
});

var mockParams = React.createClass({
    render: function() {
        return (
            <p>Bye!</p>
        );
    }
});

var PannelBlock = React.createClass({
    getInitialState: function() {
        if (this.props.menu == undefined || this.props.menu.length == 0) {
            this.props.menu = [{name: 'Infos', target: mockInfo, img: ""}, {name: 'Params', target: mockParams, img:""}];
        }
        return ({
            body: this.props.menu[0].target
        });
    },
    changeBody: function (target, index) {
        var targetedList = document.getElementsByClassName('panel-targeted');
        for (var j = 0; j < targetedList.length; j++) {
            classie.remove(targetedList[j], 'panel-targeted');
        }
        classie.add(this.refs[index], 'panel-targeted');
        this.setState({
            body: target
        })
    },
    render: function() {
        var that = this;
        var i = 0;
        return (
            <div className="warm-component pannel-container">
                <div className="pannel-head">

                </div>
                <div className="pannel-menu">
                    <ul>
                        {
                            that.props.menu.map(function(elem) {
                                var boundedClick = that.changeBody.bind(that, elem.target, i);
                                var style = {
                                    width: 300 / that.props.menu.length
                                }
                                if (elem.img == '') {
                                    return <li className={(i == 0) ? 'panel-targeted' : ''} style={style} ref={i} key={i++} onClick={boundedClick}>{elem.name}</li>
                                }
                                else {
                                    return <li className={(i == 0) ? 'panel-targeted' : ''} style={style} ref={i} key={i++} onClick={boundedClick}><img src={elem.img} alt={elem.name} height="42" width="42"/></li>
                                }
                            })
                        }
                    </ul>
                </div>
                <div className="pannel-body">
                    <this.state.body />
                </div>
            </div>
        );
    }
});

module.exports = PannelBlock;
