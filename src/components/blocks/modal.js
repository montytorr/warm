var React = global.React || require('react');

var Default = React.createClass({
    render: function () {
        return (<div></div>);
    }
});

var Modal = React.createClass({
    getInitialState: function() {
        var style = {};
        var content = (this.props.content != undefined) ? React.createFactory(this.props.content) : React.createFactory(Default);
        var trigger = (this.props.showTrigger != undefined) ? this.props.showTrigger : true;
        style.width = (this.props.width != undefined) ? this.props.width : "";
        style.height = (this.props.height != undefined) ? this.props.height : "";
        return ({
            className: "warm-component modal",
            style: style,
            content: content,
            trigger: trigger,
            triggerState: false
        });
    },
    componentWillReceiveProps: function (nextProps) {
        if (nextProps.isActive == true){
            this.setState({
                className: "warm-component modal active"
            })
        } else {
            this.setState({
                className: "warm-component modal"
            })
        }
        return true;
    },
    triggerModal: function (e) {
        console.log(e);
        if(e.target.id == 'modal-trigger' || e.target.parentElement.id == 'modal-trigger') {
            if (this.state.triggerState == true) {
                this.setState({
                    className: "warm-component modal",
                    triggerState: false
                });
            } else {
                this.setState({
                    className: "warm-component modal active",
                    triggerState: true
                });
            }
        }
    },
    propTypes: {
        isActive: React.PropTypes.bool,
        showTrigger: React.PropTypes.bool,
        width: React.PropTypes.string,
        height : React.PropTypes.string,
        content : React.PropTypes.func
    },
    render: function () {
        console.log(this.state.content);
        if (this.state.trigger == true) {
            return (
                <div>
                    <div id="modal-trigger" className="modal-trigger" onClick={this.triggerModal}></div>
                    <div className={this.state.className}>
                        <div className="modal-container" style={this.state.style}>
                            {this.state.content()}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={this.state.className}>
                    <div className="modal-container" style={this.state.style}>
                        {this.state.content()}
                    </div>
                </div>
            )
        }
    }
});

module.exports = Modal;
