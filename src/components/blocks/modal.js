var React = global.React || require('react');

var Modal = React.createClass({
    getInitialState: function() {
        var style = {};
        var content = (this.props.content != undefined) ? React.createFactory(this.props.content) : <div></div>;
        style.width = (this.props.width != undefined) ? this.props.width : "";
        style.height = (this.props.height != undefined) ? this.props.height : "";
        return ({
            className: "warm-component modal",
            style: style,
            content: content
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
    propTypes: {
        isActive: React.PropTypes.bool,
        showTrigger: React.PropTypes.bool,
        width: React.PropTypes.string,
        height : React.PropTypes.string,
        content : React.PropTypes.func
    },
    render: function () {
        console.log(this.state.content);
        return (
            <div className={this.state.className}>
                <div className="modal-container" style={this.state.style}>
                    {this.state.content()}
                </div>
            </div>
        )
    }
});

module.exports = Modal;
