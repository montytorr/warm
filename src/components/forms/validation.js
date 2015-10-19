var valid = function(composants, index) {
    var composant = composants[index];
    var invalidClass = "warm-input "+composant.kind+index+" invalid";
    var validClass = "warm-input "+composant.kind+index+" valid";
    if (composant.required == true && composant.value == "") {
        return {result: false, value: "required", target: invalidClass};
    }
    for (var i = 0; i < composant.conditions.length; i++) {
        switch (composant.conditions[i]) {
            case "mail":
                if (/[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+\.[a-zA-Z0-9_.]+/g.test(composant.value) == false) {
                    return {result: false, value: "mail", target: invalidClass};
                }
            break;

            case "isLowCase":
                if (/[a-z]+/g.test(composant.value) == false) {
                    return {result: false, value: "isLowCase", target: invalidClass};
                }
            break;

            case "isAlpha":
                if (/[a-zA-Z]/g.test(composant.value) == false) {
                    return {result: false, value: "isAlpha", target: invalidClass};
                }
            break;

            case "isNum":
                if (/[0-9]/g.test(composant.value) == false) {
                    return {result: false, value: "isNum", target: invalidClass};
                }
            break;

            case "isAlphaNum":
                if (/[a-zA-Z0-9]/g.test(composant.value) == false) {
                    return {result: false, value: "isAlphaNum", target: invalidClass};
                }
            break;

            case "regExp":
                if (composant.regExp.test(composant.value) == true) {
                    return {result: true, value: null};
                } else {
                    return {result: false, value: "regExp", target: invalidClass};
                }
            break;
            default:

        }
    }
    return {result: true, value: null, target: validClass};
};

exports.valid = valid;