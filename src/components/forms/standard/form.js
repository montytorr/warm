var React = global.React || require('react');
var formater = require('./format.js');
var validator = require('./validation.js');
var SmallErrorTile = require('../../errors/simple.js');

var Form = React.createClass({
    propTypes: {
        onFormSubmit: React.PropTypes.func,
        formComponents: React.PropTypes.array,
        error: React.PropTypes.object,
        autocomplete:React.PropTypes.bool,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            onFormSubmit: function() {},
            formComponents: [
                {
                    "kind" : "input",
                    "type" : "text",
                    "name" : "Simple",
                    "id" : "Simple",
                    "auxilaryComponent" : new Object(),
                    "hasAuxilary" : false,
                    "usesOnClick" : false,
                    "checked" : false,
                    "placeholder" : "Text input",
                    "conditions" : [],
                    "onValid" : new Function(),
                    "onInvalid" : new Function(),
                    "required" : false,
                    "regExp" : new RegExp(),
                    "action" : new Function(),
                    "inlineText" : "",
                    "blacklist" : [],
                    "whitelist" : []
                },
                {
                    "kind" : "input",
                    "type" : "email",
                    "name" : "Simple",
                    "id" : "Simple",
                    "auxilaryComponent" : new Object(),
                    "hasAuxilary" : false,
                    "usesOnClick" : false,
                    "checked" : false,
                    "placeholder" : "Mail input",
                    "conditions" : [],
                    "onValid" : new Function(),
                    "onInvalid" : new Function(),
                    "required" : false,
                    "regExp" : new RegExp(),
                    "action" : new Function(),
                    "inlineText" : "",
                    "blacklist" : [],
                    "whitelist" : []
                },
                {
                    "kind" : "input",
                    "type" : "password",
                    "name" : "Simple",
                    "id" : "Simple",
                    "auxilaryComponent" : new Object(),
                    "hasAuxilary" : false,
                    "usesOnClick" : false,
                    "checked" : false,
                    "placeholder" : "Password input",
                    "conditions" : [],
                    "onValid" : new Function(),
                    "onInvalid" : new Function(),
                    "required" : false,
                    "regExp" : new RegExp(),
                    "action" : new Function(),
                    "inlineText" : "",
                    "blacklist" : [],
                    "whitelist" : []
                },
                {
                    "kind" : "button",
                    "type" : "submit",
                    "name" : "Simple",
                    "id" : "Simple",
                    "auxilaryComponent" : new Object(),
                    "hasAuxilary" : false,
                    "usesOnClick" : false,
                    "checked" : false,
                    "placeholder" : "",
                    "conditions" : [],
                    "onValid" : new Function(),
                    "onInvalid" : new Function(),
                    "required" : false,
                    "regExp" : new RegExp(),
                    "action" : new Function(),
                    "inlineText" : "Validation button",
                    "blacklist" : [],
                    "whitelist" : []
                }
            ],
            error: {
                isVisible: false,
                message: null,
                isSuccess : false
            },
            autocomplete:true,
            customClasses : ''
        };
    },
    getInitialState: function() {
        return {
            formComponents: formater.format(this.props.formComponents),
            canSubmit: false,
            error: {
                isVisible: this.props.error.isVisible,
                message: this.props.error.message,
                isSuccess : this.props.error.isSuccess
            },
            autocomplete : this.props.error.autocomplete
        };
    },
    componentWillReceiveProps: function(nextProps) {
      this.setState({
        error: nextProps.error
      });
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
        this.state.formComponents[index].isValid = true;
    },
    submitWarmForm : function(e){
        e.preventDefault();
        var that = this;
		var i = 1;
        var formComponents={};

        if (that.props.demo) {
            var textValue = that.props.formComponents[0].value;
            var mailValue = that.props.formComponents[1].value;
            var passwordValue = that.props.formComponents[2].value;

            alert("Text : " + textValue + "\nMail : " + mailValue + "\nPassword : " + passwordValue);
        }
        
        this.state.formComponents.map(function (formComponent, i) {
            formComponents[formComponent.name] = {
                "className" : formComponent.className  || "default",
                "name" : formComponent.name  || "default",
                "value" : formComponent.value || "default",
                "id" : formComponent.id  || "default",
                "checked" : formComponent.checked  || null
            };
        });
		that.props.onFormSubmit(formComponents);
    },
    render: function() {
        return (
            <form className={"w-form " + this.props.customClasses} autocomplete={this.state.autocomplete} onSubmit={this.submitWarmForm}>
                {this
                    .state
                    .formComponents
                    .map(function (formComponent, i) {
                        return (
                            <div key={i}>
                                <formComponent.kind
                                    key={i}
                                    className={"w-form w-standard "+this.props.customClasses+" "+(formComponent.isValid) ? ("warm-input-"+formComponent.type + " valid") :((!formComponent.isValid) ? ("warm-input-"+formComponent.type+ " invalid") :("warm-input-"+formComponent.type))}
                                    type={formComponent.type || 'text'}
                                    name={formComponent.name || 'warmInput'}
                                    placeholder={formComponent.placeholder || ''}
                                    value={formComponent.value || null}
                                    id={formComponent.id || ""}
                                    checked={formComponent.checked}
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
                        <SmallErrorTile {...this.state.error}/>
                    </form>
        );
    }
});

if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
    global.Form = Form;
}

module.exports = Form;
