var React = global.React || require('react');

var WarmForm = require('../forms/standard/form');
var RoundButton = require('../buttons/round');

/**
* Retrieve the current appActiveView, search & dashboard from the stores
* @return {object} search
*/

var LoginBlock = React.createClass({
    propTypes: {
        loginRequestMethod: React.PropTypes.func,
        boldTitle: React.PropTypes.string,
        lightTitle: React.PropTypes.string,
        description: React.PropTypes.string,
        customClasses: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            loginRequestMethod: function(){},
            boldTitle: "Warm ",
            lightTitle: "login",
            description: "",
            customClasses : ""
        };
    },
    getInitialState: function() {
        return {
            isTileActive: false,
            error: {
                isVisible: false,
                message: null,
                isSuccess: false,
                className : "warm-component w-block w-login "+this.props.customClasses
            }
        };
    },
    onValidField: function (ret) {
        var error = {isVisible: false, content: null};
        this.setState({
            error: error
        });
    },
    onInvalidField: function (ret) {
        var error = {isVisible: true, content: "Le champ est incorrect"};
        this.setState({
            error: error
        });
    },
    toggleFormVisible: function () {
        this.setState({
            isTileActive: !this.state.isTileActive || false
        });
    },
    onFormSubmit: function (formData) {
        var that = this;
        that.props.loginRequestMethod(formData, function (response) {
            if (response.error !== null) {
                that.setState({
                    error: {isVisible: true, message: response.error}
                });
            }
            else{
                that.setState({
                    error: {isVisible: true, message: 'Login successful', isSuccess: true}
                });
            }
        });

    },
    render: function() {
        var formComponentsConfig = [
            {
                "kind" : "input",
                "type" : "email",
                "name" : "emailLogin",
                "onValid" : this.onValidField,
                "onInvalid" : this.onInvalidField,
                "placeholder" : "Email",
                "conditions" : ["mail"],
                "required" : true
            },
            {
                "kind" : "input",
                "type" : "password",
                "name" : "passwordLogin",
                "onValid" : this.onValidField,
                "onInvalid" : this.onInvalidField,
                "placeholder" : "Password",
                "required" : true
            },
            {
                "kind" : "input",
                "type" : "checkbox",
                "name" : "rememberMeLogin",
                "id" : "rememberMeLogin",
                "hasAuxilary" : true,
                "checked" : true,
                "auxilaryComponent" : {
                    "kind" : 'label',
                    "for" : "rememberMeLogin",
                    "content" : "Se souvenir de mon mot de passe",
                    "className" : 'warm-radio-login'
                }
            },
            {
                "kind" : "button",
                "name" : "SubmitLogin",
                "type" : "submit",
                "inlineText": "Se connecter"
            }
        ];
        return (
            <div className={this.state.className}>
                <div className={(this.state.isTileActive == false) ? "login-face active":"login-face"}>
                    <h2 className="warm-title">{this.props.boldTitle}<i>{this.props.lightTitle}</i></h2>
                    <RoundButton onClick={this.toggleFormVisible} customClasses="astrologo-bg"/>
                    <p>{this.props.description}</p>
                </div>
                <div className={(this.state.isTileActive == false) ? "login-form":"login-form active"}>
                    <h2>Connexion</h2>
                    <WarmForm onFormSubmit={this.onFormSubmit} formComponents={formComponentsConfig} error={this.state.error}/>
                </div>
            </div>
        );
    }
});

module.exports = LoginBlock;
