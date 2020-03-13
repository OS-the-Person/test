
var textview = document.forms["myForm"]["textview"];
var lastItemDec = false;
var valueArr = [];

function insertVal(val) {
    if ("/+-*".includes(val)){  //if value is an operator
        if (textview.value == "") return;
        else {
            let text;
            text = textview.value;//add textbox items to array of items
            valueArr = [];
            valueArr.push(text);
            
            textview.value = "";//clear textbox
            console.log("done");
            
            valueArr.push(val); //add operator to array
            //textview.value = textview.value + val;
            console.log(valueArr);
        }
    }   
    let regexr = /\d/;
    if (regexr.test(val)) {// if val is a digit
        textview.value = textview.value + val;
    }
    if (val == "."){
        if (textview.value.includes(".")) return
        else textview.value = textview.value + "."
    }
}

function equal() {
    valueArr.push(textview.value)
    var exp = valueArr.join("");
    if (exp) {
        textview.value = eval(exp);
    }
}

function clean() {
    textview.value = "";
    valueArr = [];
}