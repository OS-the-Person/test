
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


/*
/*["123.45", "/","3245.456"]
function insertDec() {
 /*
    if last item is a dec, or operator don't add
    if the index of last dec is greater than index of last op don't add
    if no op in string and there is a dec don't add

    if (textview.value == "") return;
    
    if ("/*+.".includes(textview.value[textview.value.length - 1])) return;
    
    if (textview.value.lastIndexOf(".") > textview.value.lastIndexOf("/") || textview.value.lastIndexOf(".") > textview.value.lastIndexOf("*") || textview.value.lastIndexOf(".") > textview.value.lastIndexOf("+") || textview.value.lastIndexOf(".") > textview.value.lastIndexOf("-")) return;
    
    /*if (textview.value.includes())
    
    if (textview.value)
    
    if (textview.value.includes(".")){
        if 
    }

}

function insertOp(val) {
    let text;
    if ("/*+".includes(textview.value[textview.value.length - 1])) return;
    else {
        text = textview.value;
        valueArr.push(text);
        
        valueArr.push(val);
        textview.value = textview.value + val;
    }
}
*/

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