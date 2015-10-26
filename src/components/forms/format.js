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

var checkConstructors = function(component) {
    var propsList = {
        "kind" : String,
        "type" : String,
        "value" : String,
        "name" : String,
        "id" : String,
        "auxilaryComponent" : Object,
        "hasAuxilary" : Boolean,
        "usesOnClick" : Boolean,
        "checked" : Boolean,
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
    for (var componentProp in component) {
        if (propsList[componentProp] !== component[componentProp].constructor) {
            return ({'value' : false, 'results' : handleError("'" + component[componentProp] + "' is not from proper constructor")});
        }
    }
    for (var prop in propsList) {
        if (component[prop] === undefined) {
            switch (propsList[prop]) {
                case String:
                component[prop] = "";
                break;
                case Array:
                component[prop] = [];
                break;
                case Function:
                component[prop] = "";
                break;
                case RegExp:
                component[prop] = "";
                break;
                case Boolean:
                component[prop] = false;
                break;
                default:
                component[prop] = "";
            }
        }
    }
    return ({'value' : true, 'results' : component});
};

var input = function(component) {
    var inputTypes = [
        'text', 'password', 'email', 'number', 'month', 'date', 'search', 'tel', 'time', 'url', 'week', 'checkbox', 'color', 'radio', 'files', 'image', 'hidden'
    ];

    var conditions = [
        'mail', 'isAlpha', 'isNum', 'isAlphaNum', 'isLowCase', 'regExp', 'atLeastOne'
    ];
    var checkResults = checkConstructors(component);

    // 1 - Check the constructors and set default values for undefined ones
    if (checkResults.value === false) {
        return (checkResults.results);
    }
    else {
        component = checkResults.results;
    }

    // 2 - Check the input type.
    if (inputTypes.indexOf(component.type) == -1) {
        return handleError("'" + component.type + "' is not a proper type prop.");
    }

    // 3 - Check the conditions array.
    for (var i = 0; i < component.conditions.length; i++) {
        if (conditions.indexOf(component.conditions[i]) == -1) {
            return handleError("'" + component.conditions[i] + "' is not a proper condition.");
        }
    }

    // 3 - Check logical props declaration.
    if ((component.onValid === "" || component.onValid === "") && component.conditions.length !== 0) {
        return handleError("Missing validation target for " + component.kind);
    }
    if (component.conditions.indexOf("regExp") != -1 && component.regExp === "") {
        return handleError("Missing RegExp for " + component.kind);
    }
    return component;
};

var button = function(component) {
    var buttonTypes = [
        'submit', 'action', 'reset'
    ];
    var checkResults = checkConstructors(component);

    // 1 - Check the constructors
    if (checkResults.value === false) {
        return (checkResults.results);
    }
    else {
        component = checkResults.results;
    }

    // 2 - Check the button type.
    if (buttonTypes.indexOf(component.type) == -1) {
        return (handleError("'" + component.type + "' is not a proper type prop."));
    }

    // 3 - Check logical props declaration.
    if (component.kind == "action" && component.Action === "") {
        return handleError("Missing Action for " + component.kind);
    }
    return component;
};

var format = function(formComponents) {

    var existingKinds = {
        "input": input,
        "button": button
    };

    for (var i = 0; i < formComponents.length; i++) {

        if (existingKinds[formComponents[i].kind] !== undefined) {
            formComponents[i] = existingKinds[formComponents[i].kind](formComponents[i]);
        }
        else {
            formComponents[i] = handleError("'" + formComponents[i].kind+ "' is not a form Composant kind.");
        }
    }
    return formComponents;
};

exports.format = format;
