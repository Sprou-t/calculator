let firstNum;
let operator;
let secondNum;

function display(){
    //create an event function that stores the 3 variables using event delegation
    let buttonSelect = document.querySelectorAll('.row');
    let display = document.querySelector('.display'); //create a var to hold display val
    let value; //create a variable to hold the number from the button pressed

    buttonSelect.addEventListener('click',(event) => {
        let target = event.target;

        if (target.class==='number'){
            value = target.innerHTML; //retrieves the html content of the button
            display.value += value; //.value-->accessing the value property of input element. Each input has a value that is set by default or by user but usually it is left blank
        }

        else if (target.class==='divide' || target.class==='multiply' || target.class==='subtract'|| target.class==='add'|| target.class==='equal'|| target.class==='decimal'){
            value = target.innerHTML; 
            display.value += value;
        }
    })_
}

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