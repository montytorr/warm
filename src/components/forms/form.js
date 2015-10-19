var React = global.React || require('react');
var formater = require('./format.js');
var validator = require('./validation.js');
var SmallErrorTile = require('../tiles/errors/simpleErrorTile.js');

//TODO require some props here
var Form = React.createClass({
    propTypes: {
        onFormSubmit: React.PropTypes.func,
        formComponents: React.PropTypes.array,
        error: React.PropTypes.object,
    },
    getDefaultProps: function() {
        return {
            onFormSubmit: function(){},
            formComponents : [],
            error: {
                isVisible: false, 
                message: null
            }
        };
    },
	getInitialState: function () {
        return {
            formComponents: formater.format(this.props.formComponents),
            canSubmit : false,
            error: {
                isVisible: this.props.error.isVisible || false, 
                message: this.props.error.message || null
            }
        };
    },
    handleChanges: function (index, evt){
        var validationResults = null;
        this.state.formComponents[index].value = evt.target.value;
        this.setState({
            formComponents: this.state.formComponents
        });
        validationResults = validator.valid(this.state.formComponents, index);
        if (this.state.formComponents[index].validation == "message") {
            this.state.formComponents[index].isValid = validationResults.result;
            this.setState({
                error: {isVisible: false, message: validationResults.result ? null : "Le champ est incorrect"}
            });
        }
    },
    render: function () {
        return (
            <form onSubmit={this.props.onFormSubmit}>
                {this.state.formComponents.map(function(formComponent, i) {
                    return (
                        <div>
                            <formComponent.kind
                                key={i}
                                className={
                                    (formComponent.isValid) ? ("warm-input-"+formComponent.kind+i+" valid") : (
                                        (!formComponent.isValid) ? ("warm-input-"+formComponent.kind+i+" invalid") : ("warm-input-"+formComponent.kind+i)
                                    )}
                                type={formComponent.type || 'text'}
                                name={formComponent.name || 'warmInput'}
                                placeholder={formComponent.placeholder || ''}
                                value={this.state.formComponents[i].value || null}
                                onChange={this.handleChanges.bind(this, i)}
                                >
                                {formComponent.inlineText || ''}
                            </formComponent.kind>
                            <SmallErrorTile isVisible={this.state.error.isVisible} message={this.state.error.message}/>
                        </div>

                    );
                }, this)}
            </form>
        );
    }
});

if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
  global.Form = Form;
}

module.exports = Form;