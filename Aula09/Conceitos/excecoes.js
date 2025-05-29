/**
 *  tentar {
 * 
 *      //conexão com banco (exemplo)
 * 
 *  } pegar (erro / excecao){
 * 
 *    // salvar ou exibir a excecao...etc
 * 
 * }
 */

try {
    console.log(`Tentando alimentar o Pet....`)
    throw new Error(`pet não quis alimento`)

} catch (excecao){
    console.log(excecao)
    console.log(excecao.name)
    console.log(excecao.message)

    //capturar a exceção
} finally {
    console.log(`SEMPRE SEREI EXECUTADO`)

    //fechar ou conferir se a conexão com o banco foi fechada
}