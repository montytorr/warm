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
            details: function(){},
            content: function(){},
            customClasses: ""
        }
    },
    render: function() {
        var Title = "";
        var Content = "";
        if(this.props.title){
            if (this.props.titleLoading == true) {
                Title = (
                    <div className="w-surface-title">
                        <div className="w-composant-loader small"></div>
                    </div>
                );
            } else {
                Title = (
                    <div className="w-surface-title">
                        <h1>
                            {this.props.title}
                        </h1>
                        <div className="details">
                            {this.props.details()}
                        </div>
                    </div>
                );
            }
        }

        if (this.props.contentLoading == true) {
            Content = (
                <div className="w-surface-content">
                    <div className="w-composant-loader medium">Loading...</div>
                </div>
            );
        } else {
            if (this.props.content.displayName) {
                Content = (
                    <div className="w-surface-content">
                        <this.props.content.displayName {...this.props}/>
                    </div>
                );
            }
        }
        return (
            <div className={"w-block w-surface "+this.props.customClasses}>
                {Title}
                {Content}
            </div>
        );
    }
});

module.exports = Surface;
