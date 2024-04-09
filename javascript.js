let firstNum = ''; 
let operator = '';//assign an empty string to determine if no. is first or second
let secondNum = '';

function display(){
    //create an event function that stores the 3 variables using event delegation
    let selectButtons = document.querySelectorAll('.row');
    let display = document.querySelector('.display'); //create a var to hold display val
    
    selectButtons.forEach(row => {
        row.addEventListener('click',(event) => {
            let target = event.target;

            if (target.classList.contains('number') || target.classList.contains('decimal')){
                //differentiate btw 1st & 2nd num to store them respectively
                if (operator===''){
                    firstNum += target.textContent;               
                    display.value = `${firstNum}`;
//.value-->accessing the value property of input element. Each input has a value that is set by default or by user but usually it is left blank
                }

                else{
                    secondNum += target.textContent;
                    display.value = `${firstNum}${operator}${secondNum}`; 
                }
                
            }

            else if (target.classList.contains('operator')){
                operator = target.textContent;
                display.value = `${firstNum}${operator}`;
            }

            else if (target.classList.contains('equal') && (firstNum !=='' && operator !=='' && secondNum !=='')){
                //display results after clearing it
                display.value = '';
                display.value = operate(parseFloat(firstNum),operator,parseFloat(secondNum));
                
            }

            else if (target.classList.contains('clear')){
                display.value = '';
                firstNum = '';
                operator = '';
                secondNum = '';
            }
        })
    });
}

//create a function that calls upon whichever operator function
function operate(firstNum,operator,secondNum){
    if (operator === '+'){
        return roundNumber(add(firstNum, secondNum));
    }

    else if (operator === '-'){
        return roundNumber(subtract(firstNum, secondNum));
    }

    else if (operator === 'X'){
        return roundNumber(multiply(firstNum, secondNum));
    }

    else if (operator === '/') {
        return roundNumber(divide(firstNum, secondNum));
    }

}
function roundNumber(num) {
    // Check if the number is a whole number
    if (Number.isInteger(num)) {
        return num; // Return the number as is if it's a whole number
    } else {
        // If the number has decimals, round it to at most 5 decimal places
        return parseFloat(num.toFixed(5));
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
    if (y === 0){
        return 'No 0 division';
    }
    return x/y;
}

display();
