var React = require('react');

var WarmForm = require('../../forms/form');
var RoundButton = require('./buttons/round');

var formComponentsConfig = {[
    {
        "kind" : "input",
        "type" : "text",
        "name" : "Mail input",
        "placeholder" : "Mail",
        "conditions" : ["mail"],
        "required" : true
    },
    {
        "kind" : "input",
        "type" : "password",
        "name" : "Password input",
        "placeholder" : "Password",
        "required" : true
    },
    {
        "kind" : "button",
        "name" : "Submit button",
        "type" : "submit",
        "inlineText": "Se connecter"
    }
]}
/**
* Retrieve the current appActiveView, search & dashboard from the stores
* @return {object} search
*/
function getLoginState() {
    return {
        //TODO this should be in the form
        canSubmit: false,
        errorTile: {state: false, content: null},
        isActive: false
    };
}

var LoginTile = React.createClass({
    getInitialState: function() {
        return getLoginState();
    },
    showForm: function () {
        this.setState({
            isActive: !this.state.isActive || false
        });
       

    },
    onValidField: function (ret) {
        var error = {state: false, content: null};
        this.setState({
            errorTile: error
        });
    },
    onInvalidField: function (ret) {
        var error = {state: true, content: "Le champ est incorrect"};
        this.setState({
            errorTile: error
        });
    },
    onValidForm: function (ret) {
    },
    onInvalidForm: function (ret) {
    },
    onFormSubmit: function (data) {
        var that = this;
        this.props.loginRequestMethod = this.props.loginRequestMethod || function(){};
        //TODO : we should be using ref to get the data from the form
        this.props.loginRequestMethod({
            'email': data[0].value,
            'password': data[1].value
        }, function (res) {
            if (res.err == true) {
                that.setState({
                    errorTile: {isVisible: true, message: res.val}
                });
            }
        });
    },
    render: function() {

        return (
            <div className="warm-component warm-surface-component warm-login">
                <div className={(this.state.isActive == false) ? "login-tile-container":"login-tile-container active"}>
                    <h2>
                        {this.props.title}
                    </h2>
                    <
                    <div
                        onClick={this.showForm}
                        className={(this.state.isActive == false) ?  : activeRoundButtonClass}>
                    </div>
                </div>
                <div className={(this.state.isActive == false) ? "login-form":"login-form active"}>
                    <h2>Connexion</h2>
                    <WarmForm
                        onSubmit = {this.onFormSubmit}
                        onValid = {this.onValidForm}
                        onInvalid = {this.onInvalidForm}
                        onValidField = {this.onValidField}
                        onInvalidField = {this.onInvalidField}
                        formComponents = {formComponentsConfig}/>
                </div>
            </div>

        );
    }
});

module.exports = LoginTile;
