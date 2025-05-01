/**
 * Calculadora de ração diária
 * 
 * Crie um script que receba o peso do dog em KG + um estoque atual de ração em gramas.
 * Calcule a quantidade diária de ração com base na seguinte fórmula? gramas por dia = peso * 30gramas
 * 
 * 
 * Exiba:
 *  - Nome do dog
 *  - Peso
 *  - Quantidade de ração recomendada por dia
 *  - Quantos dias o estoque vai durar
 */


const nomeDog = "Laninha"
const peso = 4.2
const estoqueAtualGramas = 2000


let qtdRecomendadaGramasDia = peso * 30
let diaDuracaoEstoque = parseInt(estoqueAtualGramas / qtdRecomendadaGramasDia)

apresentarDados()

function apresentarDados(){
    console.log("########## Dados do Dog ##########") 
    console.log("Nome                       : ", nomeDog)
    console.log("Peso                       : ", peso, "KG")
    console.log("Qtd ração recomendada(dia) : ", qtdRecomendadaGramasDia, "gramas")
    console.log("Qtd dias duração estoque   : ", diaDuracaoEstoque, "dia(s)")    
}
