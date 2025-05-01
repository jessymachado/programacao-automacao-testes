
//Retorna o tamanho de caracteres
let data1 = "05 de Abril"
console.log(data1.length)


// split - separar a string
const nomesDeAlunos = "Giuliana André Goku Lucas Lenilson"
const nomesDeAlunosSplit =  nomesDeAlunos.split(" ")
console.log(nomesDeAlunosSplit)


//Uper Case e Lower Case
console.log(nomesDeAlunos.toLowerCase()) // minusculo
console.log(nomesDeAlunos.toUpperCase()) // maiusculo


//Retorna um boleano
console.log(nomesDeAlunos.includes("Goku"))

//Replace all
console.log(nomesDeAlunos.replaceAll('a', 'i'))


//TRIM
const conceitosLogicos = "                    inteiro real cadeia de caracteres...           "
console.log(conceitosLogicos)
console.log(conceitosLogicos.trim())

//Slice
let dataParaCortar = "05 de abril"
console.log(dataParaCortar.slice(0,2))

//Substring
console.log(dataParaCortar.substring(0,2))
