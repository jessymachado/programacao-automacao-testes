/*
    Pensamento Computacional:
    1- Solicitar o nome, idade, peso, raça e se é adotado ou não
    2 - Para montar a tag:
     - Atualizar o nome para maiúsculo
     - Atualizar apenas a primeira letra da raça como maiúscula
    3 - Devolver o resultado da tag com o nome mais a raça e o peso

*/


/*
    Algoritmo:
    
*/
const nome = "Lana"
const raca = "yorkshire"
const peso = 4.1
const adotado = false
let idade = 5

let racaFormatada = raca.substring(0,1).toUpperCase() + raca.substring(1,(raca.length)).toLowerCase()

const tagDoPet = [
    {
      nome: nome,
      raca: racaFormatada,
      Peso: idade
    }  
  ]
  

let tag =  `########## Dados da Tag ########## \n Nome: ${tagDoPet[0].nome.toUpperCase() } \n Raça: ${tagDoPet[0].raca} \n Peso: ${tagDoPet[0].peso} Kg  `

console.log(tag)


