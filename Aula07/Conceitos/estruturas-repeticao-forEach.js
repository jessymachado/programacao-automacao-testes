
/**
 *  # Lista de Alunos
 *   Matheus 
 *   Renata
 *   Leandro
 *   Ana
 *   Lucas
 * 
 * 
 * paraCada (itemDa) listadeAlunos
 *  // dar uma nota aleatória
 * 
*/

const  listadeAlunos = [
    'Matheus',
    'Renata',
    'Leandro',
    'Ana',
    'Lucas'
]

listadeAlunos.forEach(aluno => {
    console.log(aluno)
})

/************************************** */

const listadeAlunosENotas = [
    {
        nome: 'Matheus',
        nota: 7
    },
    {
        nome: 'Renata',
        nota: 3.4
    },
    {
        nome: 'Joana',
        nota: 9.5
    },
    {
        nome: 'Pedro',
        nota: notaPedro()
    }
]

function notaPedro(){
    return 10
}

listadeAlunosENotas.forEach(listadeAlunosENotas => {
    if (listadeAlunosENotas.nota < 7){
        console.log(`O aluno ${listadeAlunosENotas.nome} precisa de um trabalho extra`)    
    }else {
        console.log(`O aluno ${listadeAlunosENotas.nome} tem a nota ${listadeAlunosENotas.nota}`)
    }    
})


listadeAlunosENotas.forEach((listadeAlunosENotas, index) => {

    console.log(index)

    if (listadeAlunosENotas.nota < 7){
        console.log(`O aluno ${listadeAlunosENotas.nome} precisa de um trabalho extra`)    
    }else {
        console.log(`O aluno ${listadeAlunosENotas.nome} tem a nota ${listadeAlunosENotas.nota}`)
    }    
})
