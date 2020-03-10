
var textview = document.forms["myForm"]["textview"]
var lastItemDec = false;

function insertVal(val) {
    textview.value = textview.value + val;
}

function insertDec() {
    if (textview.value[textview.value.length - 1] == ".") return;
    else textview.value = textview.value + ".";
}

function insertOp(val) {
    if ("/*+".includes(textview.value[textview.value.length - 1])) return;
    else textview.value = textview.value + val;
}

function equal() {
    var exp = textview.value;
    if (exp) {
        textview.value = eval(exp);
    }
}

function clean() {
    textview.value = "";
}