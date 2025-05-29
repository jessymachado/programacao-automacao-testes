/**
 * Contador de Satisfação de passeio
 * 
 * Crie um script que avise quando o dog já passeou o suficiente. Para saber, vamos considerar 
 * que ele se sentirá satisfeiro somente a partir de 5 voltas na quadra.
 * 
 * Use a estrutura while
 * 
 * Exiba:
 *  - Qual o número da volta atual
 *  - Quando o dog estiver satisfeito
 * 
 * Extra: Transforme a lógica em uma função (da forma que conseguir)
 */

let voltasParaDogFicarSatisfeito = 5
let volta = 1

while(volta <= voltasParaDogFicarSatisfeito){
    console.log(`Volta de nº ${volta} com o Pitoco`)

    volta++
}
console.log(`Acabou o passeio, Pitoco!`)