var React = global.React || require('react');

var Surface = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        titleLoading: React.PropTypes.bool,
        contentLoading: React.PropTypes.bool,
        details: React.PropTypes.func,
        content: React.PropTypes.func,
        customClasses: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            title: "",
            titleLoading: false,
            contentLoading: false,
            details: React.createClass({render: function() {return (<div></div>);}}),
            content: React.createClass({render: function() {return (<div></div>);}}),
            customClasses: ""
        }
    },
    getInitialState: function() {
        return ({
            title: this.props.title,
            titleLoading: this.props.titleLoading,
            contentLoading: this.props.contentLoading,
            details: React.createFactory(this.props.details),
            content: React.createFactory(this.props.content),
            customClasses: "warm-component w-block w-surface "+this.props.customClasses
        });
    },
    displayTitle : function (Title) {
        if (this.state.title !== "") {
            return (Title);
        }
    },
    render: function() {
        var Title = null;
        var Content = null;
        if (this.state.titleLoading == true) {
            Title = (
                <div className="w-surface-title">
                    <div className="w-composant-loader small"></div>
                </div>
            );
        } else {
            Title = (
                <div className="w-surface-title">
                    <h1>
                        {this.state.title}
                    </h1>
                    <div className="details">
                        {this.state.details()}
                    </div>
                </div>
            );
        }
        if (this.state.contentLoading == true) {
            Content = (
                <div className="w-surface-content">
                    <div className="w-composant-loader medium">Loading...</div>
                </div>
            );
        } else {
            Content = (
                <div className="w-surface-content">
                    {this.state.content()}
                </div>
            );
        }
        return (
            <div className={this.state.customClasses}>
                {this.displayTitle(Title)}
                {Content}
            </div>
        );
    }
});

module.exports = Surface;
