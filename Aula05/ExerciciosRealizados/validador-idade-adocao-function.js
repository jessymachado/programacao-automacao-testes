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

let podeAdotar;
const idadeMinAdocao = 2;
const dadosDog = [
  {
    Nome: "Laninha",
    Idade: 1,
    Porte: "grande"
  }
];


verificarSePodeSerAdotado(dadosDog[0].Porte, dadosDog[0].Idade)
apresentarDadosDog()

//Validação da regra de adoção
verificarSePodeSerAdotado(1, 'M')
verificarSePodeSerAdotado(2, 'M')
verificarSePodeSerAdotado(2, 'P')
verificarSePodeSerAdotado(1, 'M')



function verificarSePodeSerAdotado(idade, porte) {
  return podeAdotar = porte == 'P' || idade>= idadeMinAdocao ? "Sim" : "Não"
}

function apresentarDadosDog(){
  let resultado =  `########## Dados do Dog ########## \n Nome: ${dadosDog[0].Nome} \n Idade:  ${dadosDog[0].Idade} \n Porte:  ${dadosDog[0].Porte} `
  console.log(resultado)
  console.log("O cachorro pode ser adotado? ", podeAdotar)
}