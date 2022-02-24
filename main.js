function captureInput(e){
    if (e.target.value.match(/[0-9]|\./)){
        if (toDisplay == 0 && (e.target.value == '0')){
            updateDisplay(toDisplay);
        }
        else if (toDisplay == 0 && (e.target.value != '0' )){
            toDisplay = e.target.value;
            updateDisplay(toDisplay);
        }
        else 
        {
            concatenated = toDisplay.toString().concat(e.target.value);
            updateDisplay(concatenated);
        }
        }
    
    else if (e.target.value == 'clear'){
        resetCalc();
    }
    else if (e.target.value == 'del'){
        let removeLast = toDisplay.slice(0,-1);
        updateDisplay(removeLast);
    }
    else if(e.target.value.match(/[\+\-\*\/]/)) {
        if (buffer == 0 && sign == ''){
            buffer = parseFloat(toDisplay);
            toDisplay = 0;
            sign = e.target.value;
            updateDisplay(toDisplay);
        } else{
            result = operator(buffer,toDisplay,sign);
            buffer = result;
            toDisplay = 0;
            updateDisplay(toDisplay)   
        }
        }
        
        
    
    else {
        if (sign === ''){
            return;
        }
        else{
            result = operator(buffer,toDisplay,sign)
            updateDisplay(result);
        }
    }

}

function operator(a,b,sign){
    switch (sign){
        case '+':
            return (a+b);
            break;
        case '-':
            return (a-b);
            break;
        case '*':
            return (a*b);
            break;
        case '/':
            if (b === '0'){
                return "Calc Error"
            }
            else{
                return (a/b);
            }
            break;
    }
}

function updateDisplay(concat){
    if(concat !== ''){
        toDisplay = concat
    }
    else{
        toDisplay =0;
    }
    display.textContent = toDisplay;
    
}

const display = document.querySelector('.display');
const inputs = Array.from(document.querySelectorAll(`input`));

var toDisplay = parseFloat(display.textContent);
var buffer = 0;
var result = 0;
var sign = '';

inputs.forEach(input => input.addEventListener('click',captureInput));

function resetCalc(){
    toDisplay = 0;
    buffer = 0;
    updateDisplay(toDisplay);
}