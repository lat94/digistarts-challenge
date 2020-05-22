const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

const questionBuilder = (questionText) => {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
      });
};

const binaryToDecimal = (binary) => parseInt(binary, 2);
 
const decimalToBinary = (decimal) => decimal.toString(2);

const doMath = (n1, n2, operator) => {
    let result = 0;
    switch (operator) {
        case '+':
            result = n1 + n2;            
            break;
        
        case '-':
            result = n1 - n2;            
            break;

        case '*':
            result = n1 * n2;            
            break;
    
        case '/':
            result = n1 / n2;            
            break;

        case '%':
            result = n1 % n2;
    }

    return result;
}

const question = async() => { 
  const operator = await questionBuilder('Digite o sinal da operação a ser realizada [+,-,*,/,%]: ');  

  const n1 = binaryToDecimal(await questionBuilder('Digite o 1º valor binário: '));
  const n2 = binaryToDecimal(await questionBuilder('Digite o 2º valor binário: '));
  
  const decimalResult = doMath(n1, n2, operator);  
  const binaryResult = decimalToBinary(decimalResult);
  
  console.log(`O resultado da sua operação é: ${binaryResult}`);
  process.exit();
};

question();