/**
 *  Entregador de brinquedos para os dogs
 * 
 * Dado que vc tenha uma lista de brinquedos com: Bola, Osso, Corda, Sino.
 * 
 * 
 * Crie um script que passe pela lista de brinquedos e entregue um por vez.
 * 
 * Exiba o nome de cada brinquedo que for entregue.
 * 
 * Use a estrutura de repetição ForEach
 */



let listaBrinquedos = ['Bola', 'Osso', 'Corda', 'Sino']

EntregarOsBrinquedos(listaBrinquedos)



function EntregarOsBrinquedos(listaComOsBrinquedos){
    listaComOsBrinquedos.forEach(brinquedo => {
        console.log(`Brinquedo entregue: ${brinquedo}`)
    })
}

