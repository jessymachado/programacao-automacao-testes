/**
 *   Promises (promessa):
 *     Pode ser resolvida ou rejeitada
 * 
 *   Outra forma de lidar com  o promise: async function (esperar a função terminar de executar)
 */


//Função assincrona (retorno passsar a ser uma promessa)
//async - assíncrono
async function exiborNomeDogFormatado(nome){
    return nome.toUpperCase()
}

//sem await (sem a espera)
console.log(exiborNomeDogFormatado(`Laninha`))

// await - espera
console.log(await exiborNomeDogFormatado(`Laninha`))
