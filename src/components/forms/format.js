var handleError = function(error) {
    return (
        {
            "kind" : "div",
            "type" : "",
            "style" : {
                'width':'200px',
                'height':'60px',
                'background-color': '#D83C2B',
                'color':'white',
                'border': 'solid 1px #707070',
                'border-radius' : '3px',
                'display': 'inline-block',
                'padding': '10px'
            },
            "inlineText" : "ERROR : " + error
        }
    );
};

var checkConstructors = function(composant) {
    var propsList = {
        "kind" : String,
        "type" : String,
        "value" : String,
        "name" : String,
        "placeholder" : String,
        "conditions" : Array,
        "onValid" : Function,
        "onInvalid" : Function,
        "required" : Boolean,
        "regExp" : RegExp,
        "action" : Function,
        "inlineText" : String,
        "blacklist" : Array,
        "whitelist" : Array
    };
    for (var composantProp in composant) {
        if (propsList[composantProp] !== composant[composantProp].constructor) {
            return ({'value' : false, 'results' : handleError("'" + composant[composantProp] + "' is not from proper constructor")});
        }
    }
    for (var prop in propsList) {
        if (composant[prop] == undefined) {
            switch (propsList[prop]) {
                case String:
                composant[prop] = "";
                break;
                case Array:
                composant[prop] = [];
                break;
                case Function:
                composant[prop] = "";
                break;
                case RegExp:
                composant[prop] = "";
                break;
                case Boolean:
                composant[prop] = false;
                break;
                default:
                composant[prop] = "";
            }
        }
    }
    return ({'value' : true, 'results' : composant});
};

var input = function(composant) {
    var inputTypes = [
        'text', 'password', 'email', 'number', 'month', 'date', 'search', 'tel', 'time', 'url', 'week', 'checkbox', 'color', 'radio', 'files', 'image', 'hidden'
    ];

    var conditions = [
        'mail', 'isAlpha', 'isNum', 'isAlphaNum', 'isLowCase', 'regExp', 'atLeastOne'
    ];
    var checkResults = checkConstructors(composant);

    // 1 - Check the constructors and set default values for undefined ones
    if (checkResults.value == false) {
        return (checkResults.results);
    }
    else {
        composant = checkResults.results;
    }

    // 2 - Check the input type.
    if (inputTypes.indexOf(composant.type) == -1) {
        return handleError("'" + composant.type + "' is not a proper type prop.")
    }

    // 3 - Check the conditions array.
    for (var i = 0; i < composant.conditions.length; i++) {
        if (conditions.indexOf(composant.conditions[i]) == -1) {
            return handleError("'" + composant.conditions[i] + "' is not a proper condition.")
        }
    }

    // 3 - Check logical props declaration.
    if ((composant.onValid == "" || composant.onValid == "") && composant.conditions.length != 0) {
        return handleError("Missing validation target for " + composant.kind);
    }
    if (composant.conditions.indexOf("regExp") != -1 && composant.regExp == "") {
        return handleError("Missing RegExp for " + composant.kind);
    }
    return composant;
};

var button = function(composant) {
    var buttonTypes = [
        'submit', 'action', 'reset'
    ];
    var checkResults = checkConstructors(composant);

    // 1 - Check the constructors
    if (checkResults.value == false) {
        return (checkResults.results);
    }
    else {
        composant = checkResults.results;
    }

    // 2 - Check the button type.
    if (buttonTypes.indexOf(composant.type) == -1) {
        return (handleError("'" + composant.type + "' is not a proper type prop."))
    }

    // 3 - Check logical props declaration.
    if (composant.kind == "action" && composant.Action == "") {
        return handleError("Missing Action for " + composant.kind);
    }
    return composant;
};

var format = function(formComponents) {
    var existingKinds = {
        "input": input,
        "button": button
    };

    for (var i = 0; i < formComponents.length; i++) {
        if (existingKinds[formComponents[i].kind] != undefined) {
            formComponents[i] = existingKinds[formComponents[i].kind](formComponents[i]);
        }
        else {
            formComponents[i] = handleError("'" + formComponents[i].kind+ "' is not a form Composant kind.");
        }
    }
    return formComponents;
};

exports.format = format;