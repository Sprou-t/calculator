let firstNum;
let operator;
let secondNum;

//create a function that calls upon whichever operator function
function operate(firstNum,operator,secondNum){
    if (operator = '+'){
        add(firstNum, secondNum);
    }

    else if (operator = '-'){
        subtract(firstNum, secondNum);
    }

    else if (operator = 'x'){
        multiply(firstNum, secondNum);
    }

    else {
        divide(firstNum, secondNum);
    }

}

//add
function add(x,y) {
    return x+y;
}

//subtract
function subtract(x,y){
    return x-y;
}

//multiply
function multiply(x,y){
    return x*y;
}

//divide
function divide(x,y){
    return x/y;
}

//for > advance operation use array and append the keys inside