var React = global.React || require('react');

var Default = React.createClass({
    render: function () {
        return (<div></div>);
    }
});

var Modal = React.createClass({
    propTypes: {
        isActive: React.PropTypes.bool,
        showTrigger: React.PropTypes.bool,
        width: React.PropTypes.string,
        height : React.PropTypes.string,
        content : React.PropTypes.func,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            isActive: false,
            showTrigger: true,
            width: "",
            height : "",
            content : Default,
            customClasses : ""
        };
    },
    getInitialState: function() {
        var style = {};
        style.width = this.props.width;
        style.height = this.props.height;
        return ({
            style: style,
            content: React.createFactory(this.props.content),
            trigger: this.props.showTrigger,
            triggerState: false,
            className: "warm-component w-block w-modal "+this.props.customClasses
        });
    },
    componentWillReceiveProps: function (nextProps) {
        if (nextProps.isActive == true){
            this.setState({
                className: "warm-component w-block w-modal active "+this.props.customClasses
            })
        } else {
            this.setState({
                className: "warm-component w-block w-modal "+this.props.customClasses
            })
        }
        return true;
    },
    triggerModal: function (e) {
        if(e.target.id == 'modal-trigger' || e.target.parentElement.id == 'modal-trigger') {
            if (this.state.triggerState == true) {
                this.setState({
                    className: "warm-component w-block w-modal "+this.props.customClasses,
                    triggerState: false
                });
            } else {
                this.setState({
                    className: "warm-component w-block w-modal active "+this.props.customClasses,
                    triggerState: true
                });
            }
        }
    },
    render: function () {
        if (this.state.trigger == true) {
            return (
                <div>
                    <div id="modal-trigger" className="modal-trigger" onClick={this.triggerModal}>
                        <h3>Click Me</h3>
                        <div className={this.state.className}>
                            <div className="modal-container" style={this.state.style}>
                                {this.state.content()}
                            </div>
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
