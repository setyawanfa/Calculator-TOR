function captureInput(e){
    if (e.target.value.match(/[0-9]|\./)){
        if (toDisplay == '0' && !(e.target.value !== '0' && e.target.value!=='.')){
            toDisplay = e.target.value;
            updateDisplay(toDisplay);
        }
        else 
        {
            let concatenated = toDisplay.concat(e.target.value);
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

let toDisplay = parseFloat(display.textContent);

inputs.forEach(input => input.addEventListener('click',captureInput));

function resetCalc(){
    toDisplay = 0;
    updateDisplay(toDisplay);
}