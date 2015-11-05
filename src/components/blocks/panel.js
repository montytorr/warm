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

var PanelBlock = React.createClass({
    getInitialState: function() {
        var def = [{name: 'Infos', target: mockInfo, img: ""}, {name: 'Params', target: mockParams, img:""}];
        if (this.props.menu == undefined) {
            return ({
                menu: def,
                body: def[0].target
            });
        } else {
            return ({
                menu: this.props.menu,
                body: this.props.menu[0].target
            });
        }
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
            <div className="warm-component panel-container">
                <div className="panel-head">

                </div>
                <div className="panel-menu">
                    <ul>{
                            that.state.menu.map(function(elem) {
                                var boundedClick = that.changeBody.bind(that, elem.target, i);
                                var style = {
                                    width: 300 / that.state.menu.length
                                }
                                if (elem.img == '') {
                                    return <li className={(i == 0) ? 'panel-targeted' : ''} style={style} ref={i} key={i++} onClick={boundedClick}>{elem.name}</li>
                                }
                                else {
                                    return <li className={(i == 0) ? 'panel-targeted' : ''} style={style} ref={i} key={i++} onClick={boundedClick}><img src={elem.img} alt={elem.name} height="42" width="42"/></li>
                                }
                            })
                        }</ul>
                </div>
                <div className="panel-body">
                    <this.state.body />
                </div>
            </div>
        );
    }
});

module.exports = PanelBlock;
