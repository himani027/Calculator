const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', (event) =>{
        //console.log(event.target.value);
        
        inputNumber(event.target.value);
        updateScreen(currentInput);
        
    });
});

const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen=(number)=>{
    
    calculatorScreen.value = number;
}

let prevInput="0";
let currentInput="0";
let calculationOperator='';

const inputNumber=(number)=>{
    if(currentInput ==="0"){
        currentInput = number;
    }
    else{
        currentInput+=number;
    }
}

const operators=document.querySelectorAll('.operator');

operators.forEach((operator)=>{
    operator.addEventListener('click',(event)=>{
        inputOperator(event.target.value);
        
        
    });
});
const inputOperator=(operator)=>{
    prevInput=currentInput
    calculationOperator=operator
    currentInput='0'
}

const calculate =()=>{
let result=0;
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevInput) + parseFloat(currentInput)
            break;
        case '-':
            result = parseFloat(prevInput) - parseFloat(currentInput)
            break;
        case '*':
            result = parseFloat(prevInput) * parseFloat(currentInput)
            break;
        case '/':
            result = parseFloat(prevInput) / parseFloat(currentInput)
            break;
        default:
            return;
            
    }
    currentInput=result.toString();
    calculationOperator="";
    
    
}


const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', ()=>{
    calculate();
    updateScreen(currentInput)
    
});

const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click',(event)=>{
    clearAll()
    updateScreen(currentInput)
});

const clearAll=()=>{
    prevInput="0";
    currentInput="0";
    calculationOperator=''
}

const percent = document.querySelector('.percentage');
percent.addEventListener('click',(event)=>{
    currentInput/=100;
    updateScreen(currentInput);
});


const inputDecimal=(dot)=>{
    if(currentInput.includes('.')){
        return
    }
    currentInput+=dot;
}
const decimal = document.querySelector('.decimal');
decimal.addEventListener('click',(event)=>{
    inputDecimal(event.target.value);
    updateScreen(currentInput);
});