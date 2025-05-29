function geradorDeTagsDeIdentificacao(nomePet){
    const nomeFormatado = nomePet.trim().toUpperCase()    
    return nomeFormatado
}

function verificarSePodeSerAdotado(idade, porte){
    let podeAdotar = false
    
    if (idade === 1 && porte === 'M')
        podeAdotar = true  
              
    return podeAdotar    
}

function calcularConsumoDeRacao(nome, idade, peso){    
    let nomeDog = nome
    let idadeDog = idade
    let qtdRecomendadaGramasDia = 300
    let consumoDiarioRacao =  peso * qtdRecomendadaGramasDia 
    return consumoDiarioRacao
}

function decidirTipoDeAtividadePorPorte(porte){
    let atividade
    switch (porte){    
        case 'pequeno':
            atividade = "brincar dentro de casa";
            break;
        case 'médio':
            atividade = "caminhada no quarteirão";
            break;
        case 'grande':
            atividade = "correr no parque";
            break;
        default:
            atividade = "porte inválido";
            break;
    }
    return atividade
}

async function buscarDadoAsync(){
    return 'Pipoca'    
}


export {
    geradorDeTagsDeIdentificacao,      
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}


