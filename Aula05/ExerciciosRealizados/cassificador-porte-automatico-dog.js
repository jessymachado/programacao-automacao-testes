const nome = "Laninha"
const peso = 4.2

apresentarDados()


function classificarPorte(peso){
    let porte = peso <= 10 ? "Pequeno" : "Médio"
    return porte     
}

function apresentarDados(){
    let resultado =  `########## Dados do Dog ########## \n Nome: ${nome} \n Peso:  ${peso} \n Porte:  ${porteClassificado = classificarPorte(peso)} `
    console.log(resultado)
}