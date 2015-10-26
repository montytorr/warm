var React = global.React || require('react');
var classie = global.classie || require('classie');
var NProgress = global.NProgress || require('nprogress');

var FullScreenLoader = React.createClass({
    propTypes: {
        isLoading: React.PropTypes.bool,
        boldText: React.PropTypes.string,
        lightText: React.PropTypes.string,
        minWaitTime: React.PropTypes.number,
        rootContainer : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            boldText: 'Warm ',
            lightText: 'loader',
            isLoading: true,
            minWaitTime: 1000,
            rootContainer : 'app-content'
        };
    },
    /**
    * @return {object}
    */
    componentDidMount: function() {
        NProgress.start();
    },
    componentDidUpdate: function(prevProps, prevState) {
        var that = this;
        //did app go from loading to not loading
        if (prevProps.isLoading && !this.props.isLoading) {
            setTimeout(function() {
                var container = document.getElementById(that.props.rootContainer);
                var WarmLoader = container.querySelector('.warm-loader');
                var WarmLoadedContent = container.querySelector('.warm-loaded-content');
                NProgress.set(0.9);
                classie.remove(WarmLoader, 'show');
                classie.add(WarmLoader, 'hide');
                classie.remove(WarmLoadedContent, 'hide');
                classie.add(WarmLoadedContent, 'show');
                setTimeout(function() {
                    NProgress.done();
                    setTimeout(function() {
                        classie.add(WarmLoader, 'no-display');
                    }, 100);
                }, 100);
            }, this.props.minWaitTime);

        }
    },
    render: function() {
        return (
            <div className="warm-loader warm-fade-transition show">
                <h1 className="warm-loader-title">
                    {this.props.boldText}
                    <i>
                        {this.props.lightText}
                    </i>
                </h1>
            </div>
        );
    }
});

if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
    global.FullScreenLoader = FullScreenLoader;
}

module.exports = FullScreenLoader;
