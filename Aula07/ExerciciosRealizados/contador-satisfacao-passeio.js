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

const qtdVoltasParaDogEstarSatisfeito = 5
let qtdVoltaInicial = 1

while(qtdVoltaInicial <= qtdVoltasParaDogEstarSatisfeito){    
   
    exibirQuandoODogEstiverSatisfeito()
    qtdVoltaInicial++

}

function exibirQuandoODogEstiverSatisfeito(){
    console.log("A volta atual é", qtdVoltaInicial)

    if (qtdVoltaInicial == qtdVoltasParaDogEstarSatisfeito){        
        console.log("O dog está satisfeito!!!")
    }    
}