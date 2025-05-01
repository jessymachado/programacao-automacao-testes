/*******************************
    Console API 
*******************************/
console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção!!")
console.table({
    nome: 'Samuel',
    turm: '02',
    disciplina: 'ProgJS'
})

console.table([{
    nome: 'Samuel',
    turm: '02',
    disciplina: 'ProgJS'
}, {
    nome: 'Jessica',
    turm: '02',
    disciplina: 'ProgJS'
}])


const irmaos = [
    {
        nome: "Thor",
        idade: 4
    },
    {
        nome: "Hela",
        idade: 5
    }
]
console.table(irmaos)
