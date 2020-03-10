
var textview = document.forms["myForm"]["textview"]
var lastItemDec = false;

function insertVal(val) {
    if (val == "." && !lastItemDec) {
        textview.value = textview.value + val;
        lastItemDec = true;
        return;
    }
    textview.value = textview.value + val;
}
function insertOp(op) {
    textview.value += op;
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