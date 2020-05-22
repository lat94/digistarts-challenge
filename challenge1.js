const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

const questionBuilder = (questionText) => {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
};

const question = async () => {
  const quantity = await questionBuilder('Digite o tamanho do conjunto: ');
  const array = [];
  for (let index = 0; index < quantity; index++) {
    array.push(await questionBuilder(`Digite o ${array.length + 1}º número: `));
  }
  const group = Array.from(new Set(array.sort()));
  console.log(`O seu conjunto de elementos único é: K[${group}]`);
  process.exit();
};

question();