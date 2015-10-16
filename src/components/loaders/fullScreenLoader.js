var React = require('react');
var classie = require('classie');
var NProgress = require('nprogress');
var FullScreenLoader = React.createClass({
    propTypes: {
        isLoading: React.PropTypes.bool,
        boldText: React.PropTypes.string,
        lightText: React.PropTypes.string,
    },
    getDefaultProps: function() {
        return {
          boldText: 'Warm ',
          lightText: 'loader',
          isLoading: true
        };
    },
    /**
    * @return {object}
    */
    componentDidMount: function() {
        NProgress.start();
    },
    componentDidUpdate: function(prevProps, prevState){
        //did app go from loading to not loading
        if(prevProps.isLoading && !this.props.isLoading){
            var container = document.getElementById( 'app-content' );
            var WarmLoader = container.querySelector('.warm-loader');
            var WarmLoadedContent = container.querySelector('.warm-loaded-content');
            NProgress.set(0.9);
            classie.add( WarmLoader, 'hide' );
            classie.remove( WarmLoadedContent, 'hide' );
            classie.add( WarmLoadedContent, 'show' );
            setTimeout(function(){
                 NProgress.done();
                classie.add( WarmLoader, 'no-display' );
            }, 250)
        }
    },
    render: function() {
        return (
            <div className="warm-loader warm-fade-transition shox">
                <h1 className="warm-loader-title">{this.props.boldText}<i>{this.props.lightText}</i></h1>
            </div>
        );
    }
});

if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
  global.FullScreenLoader = FullScreenLoader;
}

module.exports = FullScreenLoader;