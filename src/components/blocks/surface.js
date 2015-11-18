var React = global.React || require('react');

var Surface = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        titleLoading: React.PropTypes.bool,
        bodyLoading: React.PropTypes.bool,
        details: React.PropTypes.func,
        content: React.PropTypes.func,
        customClasses: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            title: React.PropTypes.string,
            titleLoading: false,
            bodyLoading: false,
            details: React.createClass({render: function() {return (<div></div>);}}),
            content: React.createClass({render: function() {return (<div></div>);}}),
            customClasses: ""
        }
    },
    getInitialState: function() {
        return ({
            title: this.props.title,
            titleLoading: this.props.isLoading,
            bodyLoading: this.props.isLoading,
            details: React.createFactory(this.props.details),
            content: React.createFactory(this.props.content),
            customClasses: "warm-component w-block w-surface "+this.props.customClasses
        });
    },
    render: function() {
        var title = null;
        var body = null;
        if (this.state.titleLoading == true) {
            title = (
                <div className="title">
                    <h1>
                        Loading...
                    </h1>
                </div>
            );
        } else {
            title = (
                <div className="title">
                    <h1>
                        {this.state.title}
                    </h1>
                    <div className="details">
                        {this.state.details()}
                    </div>
                </div>
            );
        }
        if (this.state.bodyLoading == true) {
            body = (
                <div className="content">
                    Loading...
                </div>
            );
        } else {
            body = (
                <div className="content">
                    {this.state.content()}
                </div>
            );
        }
        return (
            <div className={this.state.customClasses}>
                {title}
                {body}
            </div>
        );
    }
});

module.exports = Surface;
