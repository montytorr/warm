var React = global.React || require('react');
var formater = require('./format.js');
var validator = require('./validation.js');
var SmallErrorTile = require('../errors/simpleErrorTile.js');

var Form = React.createClass({
    propTypes: {
        onFormSubmit: React.PropTypes.func,
        formComponents: React.PropTypes.array,
        error: React.PropTypes.object
    },
    getDefaultProps: function() {
        return {
            onFormSubmit: function() {},
            formComponents: [],
            error: {
                isVisible: false,
                message: null
            }
        };
    },
    getInitialState: function() {
        return {
            formComponents: formater.format(this.props.formComponents),
            canSubmit: false,
            error: {
                isVisible: this.props.error.isVisible || false,
                message: this.props.error.message || null
            }
        };
    },
    handleChanges: function(index, evt) {
        var validationResults = null;
        this.state.formComponents[index].value = evt.target.value;
        this.setState({
            formComponents: this.state.formComponents
        });
        validationResults = validator.valid(this.state.formComponents, index);
            this.state.formComponents[index].isValid = validationResults.result;
            this.setState({
                error: {
                    isVisible: validationResults.result ? false: true,
                    message: validationResults.result ? null: "Le champ est incorrect"
                }
            });
    },
    handleCheckbox: function(index, evt) {
        var validationResults = null;
        this.state.formComponents[index].checked = !this.state.formComponents[index].checked;
        this.setState({
            formComponents: this.state.formComponents
        });
        this.state.formComponents[index].isValid = true

    },
    render: function() {
        return (
            <form className="warm-form" onSubmit={this.props.onFormSubmit}>
                {this
                    .state
                    .formComponents
                    .map(function (formComponent, i) {
                        return (
                            <div key={i}>
                                <formComponent.kind
                                    key={i}
                                    className={(formComponent.isValid) ? ("warm-input-"+formComponent.type+" warm-input-" + formComponent.kind + i + " valid") :((!formComponent.isValid) ? ("warm-input-"+formComponent.type+" warm-input-" + formComponent.kind + i + " invalid") :("warm-input-"+formComponent.type+" warm-input-" + formComponent.kind + i))}
                                    type={formComponent.type || 'text'}
                                    name={formComponent.name || 'warmInput'}
                                    placeholder={formComponent.placeholder || ''}
                                    value={this.state.formComponents[i].value || null}
                                    id={this.state.formComponents[i].id || ""}
                                    checked={this.state.formComponents[i].checked}
                                    onClick={(formComponent.type === "checkbox") ? (this.handleCheckbox.bind(this, i)) : function(){}}
                                    onChange={this
                                        .handleChanges
                                        .bind(this, i)}>
                                        {formComponent.inlineText || null}
                                    </formComponent.kind>
                                    {(formComponent.hasAuxilary) ? (<formComponent.auxilaryComponent.kind className={formComponent.auxilaryComponent.className} htmlFor={formComponent.auxilaryComponent.for}>{formComponent.auxilaryComponent.content}</formComponent.auxilaryComponent.kind>) : ''}

                                </div>
                            );
                        }, this)}
                        <SmallErrorTile
                            isVisible={this.state.error.isVisible}
                            message={this.state.error.message}/>
                    </form>
        );
    }
});

if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
    global.Form = Form;
}

module.exports = Form;
