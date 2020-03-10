
var textview = document.forms["myForm"]["textview"]

function insertNum(num) {
    textview.value = textview.value + num;
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