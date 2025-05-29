
/**
 * para, faca
 * contador; condicao; manipulação do contador (incremento/decremento)
 * 
 * quantidadeDePetiscos; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++
 */

const qtdCalculada = 3

for(let quantidadeDePetiscos = 1; quantidadeDePetiscos <= qtdCalculada; quantidadeDePetiscos++){
    //acao de dar o petisco
    console.log(`Dando o petisco de nº ${quantidadeDePetiscos}`)

}


const gatos = ['Lessie', 'Pony', 'Fumaca']
for (let indice = 0; indice <= gatos; indice++){
    console.log(`Dando o petisco para ${gatos[indice]}`)
}

//Dar 3 petiscos para cada animal
const quantidadeCalculada = 3
const animais = ['Lessie', 'Mimi', 'Lili']
for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
    // acao de dar o petisco
    console.log(`Dando o petisco de nº: ${quantidadeDePetiscos}`)
    for (let indice = 0; indice < animais.length; indice++) {
        console.log(`Dando o petisco para ${animais[indice]}`)
    }
}