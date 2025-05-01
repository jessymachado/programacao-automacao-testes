/***
 * Validar de idade mínima para adoção
 *  Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida por exemplo, 2 anos.
 * 
 * Use os operadores adequados e exiba:
 *  - nome do dog
 *  - idade 
 *  - se está apto ou não para adoção
 * 
 * 
 * Extra: aplique uma regra com operador lógico para permitir que o se o cão for pequeno porte
 * pode ser adotado independente da idade
 * 
 * TESTES::::
 *  MINIMO = 2
 * 
 *  IDADE 1 + PORTE M = NAO
 *  IDADE 1 + PORTE P = SIM PELO PORTE
 *  IDADE 2 + PORTE M = SIM PELA IDADE
 *  IDADE 2 + PORTE M = SIM PELA IDADE E PORTE
 * 
 */
// 

const idadeMinAdocao = 2;
const dog = [
  {
    Nome: "Laninha",
    Idade: 1,
    Porte: "grande"
  },
  {
    Nome: "Thor",
    Idade: 3,
    Porte: "pequeno"
  },
  {
    Nome: "Mel",
    Idade: 1,
    Porte: "pequeno"
  }
];

  

let dogSorteado = dog[Math.floor(Math.random() * dog.length)];

let podeAdotar;


if (dogSorteado.Porte == "pequeno" || dogSorteado.Idade >= idadeMinAdocao)
    podeAdotar = "Sim";
else
    podeAdotar = "Não";


let resultado =  `########## Dados do Dog ########## \n Nome: ${dogSorteado.Nome} \n Idade:  ${dogSorteado.Idade} \n Porte:  ${dogSorteado.Porte} `
console.log(resultado)
console.log("O cachorro pode ser adotado? ", podeAdotar)