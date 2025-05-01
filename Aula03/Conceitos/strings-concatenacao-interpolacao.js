
/**
 * Strings
 */

// 'Turma 02 do PGATS' - aspas simples ou single quote 
// "Turma 02 do PGATS" - aspas duplas ou double quote
// `Turma 02 do PGATS` - template strings

const numeroAula = "03"
const turma = "02"
let data = "05 de Abril"

//CONCATENACAO
console.log("Aula 03 da Turma " + turma + " no Sábado dia 05 de Abril")

//INTERPOLAÇÃO : Template String Quando usamos a crase
console.log(`Aula ${ numeroAula } da Turma ;${ turma } no Sábado dia ${ data }`)