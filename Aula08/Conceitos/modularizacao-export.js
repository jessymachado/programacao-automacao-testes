
let brinquedos = [
    'Osso', 'Peteca', 'Chocalho'
]

ExibirNomePet('Pitoco')
ExibirNomePet()

function ExibirNomePet(nomePet='Jussara'){
    console.log("O nome do pet", nomePet)
}

function ExibirIdadePet(idadePet){
    console.log("A idade do pet", idadePet)
}

export {
    ExibirNomePet,
    ExibirIdadePet
}