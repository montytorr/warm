var React = global.React || require('react');
var formater = require('./format.js');
var validator = require('./validation.js');
var SmallErrorTile = require('../components/tiles/error-tiles/simple');

//TODO require some props here
var Form = React.createClass({
	getInitialState: function () {
        return {
            formComposants: formater.format(this.props.formComposants),
            canSubmit : false,
            error: {
                isVisible: false, 
                message: null
            }
        };
    },
    onSubmit: function () {

    },
    handleChanges: function (index, evt){
        var validationResults = null;
        this.state.formComposants[index].value = evt.target.value;
        this.setState({
            formComposants: this.state.formComposants
        });
        validationResults = validator.valid(this.state.formComposants, index);
        if (validationResults.result == true && this.state.formComposants[index].onValid != "") {
            this.state.formComposants[index].state = "valid";
            this.state.formComposants[index].onValid(validationResults);
        }
        else if (validationResults.result == false && this.state.formComposants[index].onInvalid != ""){
            this.state.formComposants[index].state = "invalid";
            this.state.formComposants[index].onInvalid(validationResults);
        }
    },
    render: function () {
        return (
            <form
                onSubmit={this.onSubmit}
                className={this.className}
                >
                {this.state.formComposants.map(function(formComponent, i) {
                    return (
                        <div>
                            <formComponent.kind
                                key={i}
                                className={
                                    (formComponent.state == "valid") ? ("m-"+formComponent.kind+i+" m-valid") : (
                                        (formComponent.state == "invalid") ? ("m-"+formComponent.kind+i+" m-invalid") : ("m-"+formComponent.kind+i)
                                    )}
                                type={formComponent.type}
                                name={formComponent.name}
                                placeholder={formComponent.placeholder}
                                style={formComponent.style}
                                value={this.state.formComposants[i].value}
                                onChange={this.handleChanges.bind(this, i)}
                                >
                                {formComponent.inlineText}
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
