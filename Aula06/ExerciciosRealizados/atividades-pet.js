let atividade

atualizarDetalhesAtividade("Laninha", 'pequeno', 0)
atualizarDetalhesAtividade("Laninha", 'pequeno', 15)
atualizarDetalhesAtividade("Laninha", 'pequeno', 30)
atualizarDetalhesAtividade("Laninha", 'médio', 14)
atualizarDetalhesAtividade("Laninha", 'médio', 16)
atualizarDetalhesAtividade("Laninha", 'médio', 31)
atualizarDetalhesAtividade("Laninha", 'grande', 15)
atualizarDetalhesAtividade("Laninha", 'grande', 29)
atualizarDetalhesAtividade("Laninha", 'grande', 100)
atualizarDetalhesAtividade("Laninha", 'gigante', 100)


function atualizarDetalhesAtividade(nome, porte, tempo){

    calcularAtividadePorte(porte)    

    let detalheAtividade
    if (atividade == "porte inválido"){
        detalheAtividade = ""
    }
    else {
        if (tempo < 15)
            detalheAtividade = "Atividade rápida" 
        else if (tempo <= 30)
            detalheAtividade = "Tempo ideal"
        else
            detalheAtividade = "Hora da diversão"
    }
    console.log(`${nome} - ${porte} - ${tempo} - ${atividade}:[${detalheAtividade}]`)
}


function calcularAtividadePorte(porte){
    
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
}