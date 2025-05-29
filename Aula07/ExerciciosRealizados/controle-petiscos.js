/** CONTROLE DE PETISCOS
 *  Crie um script que receba uma quantidade de petiscos e dê 1 por vez até o dog estiver satisfeito.
 * 
 * Use a estrutura de repetição for contado
 * 
 * Exiba:
 *  - Cada vez que um petisco for entregue
 *  - Quando o dog estiver satisfeito (que é quando terminar os petiscos)
 * 
 *  Extra: Transforme a lógica em uma função (da forma que conseguir)
 */

FornecerPetiscosAteQueOAnimalFiqueSatisfeito(2)



function FornecerPetiscosAteQueOAnimalFiqueSatisfeito(qtdPetiscosParaDar){
    for (let qtdPetiscos = 1; qtdPetiscos <= qtdPetiscosParaDar; qtdPetiscos++) {    
        console.log(`Dando o petisco de nº: ${qtdPetiscos}`)    
    }
    console.log(`A Laninha já está satisfeita!`)
}