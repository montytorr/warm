var React = global.React || require('react');
var classie = global.classie || require('classie');
var NProgress = global.NProgress || require('nprogress');

var FullScreenLoader = React.createClass({
    propTypes: {
        isLoading: React.PropTypes.bool,
        boldText: React.PropTypes.string,
        lightText: React.PropTypes.string,
        minWaitTime: React.PropTypes.number,
        rootContainer : React.PropTypes.string,
        afterLoad : React.PropTypes.object,
        endSignal : React.PropTypes.func
    },
    getDefaultProps: function() {
        return {
            boldText: 'Warm ',
            lightText: 'loader',
            isLoading: true,
            minWaitTime: 1000,
            rootContainer : 'app-content',
            afterLoad : {},
            endSignal : function(){}
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
        var container = document.getElementById(that.props.rootContainer);
        var WarmLoader = container.querySelector('.warm-loader');
        var WarmLoadedContent = container.querySelector('.warm-loaded-content');
        if (prevProps.isLoading && !this.props.isLoading) {
            setTimeout(function() {
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
        if (!prevProps.isLoading && this.props.isLoading) {
            classie.remove(WarmLoader, 'no-display');

            classie.add(WarmLoadedContent, 'hide');
            classie.remove(WarmLoadedContent, 'show');
            setTimeout(function() {
                classie.add(WarmLoader, 'show');
                classie.remove(WarmLoader, 'hide');
                NProgress.start();
                _fireAfterLoadAction(that.props);
            }, 200);
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

/**
* fires an action from AppStore.afterLoadAction and deletes if afterwards
*/
var _fireAfterLoadAction = function(props){
    if(typeof props.afterLoad.afterLoadAction === 'function'){
        try {
            props.afterLoad.afterLoadAction(props.afterLoad.afterLoadData, function(){
                process.nextTick(props.endSignal)

            })
        } catch (e) {
            if (e instanceof SyntaxError) {
                console.log(e.message);
            }
        }
    }
};

if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
    global.FullScreenLoader = FullScreenLoader;
}

module.exports = FullScreenLoader;
