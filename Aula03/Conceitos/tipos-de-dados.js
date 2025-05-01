
/************************
 *  TIPO DE DADOS - CADEIA, INTEIRO, REAL, LOGICO, VETOR, MATRIZ
 *  FUNÇÕES: 
 ***********************/

/**
 * Tipos de Dados - cadeia, inteiro, real, logico, vetor, matriz
 * (funcoes - leia e escreva)
 * 
  
  String - cadeia
  Number - inteiros/real
  Boolean - logico
  Array - vetor/matriz
  
  undefined
  null

  BigInt = Number para números extremamente grandes 
  Symbol = 'identificador único'

 */

//String - cadeia
  const valorString = "teste"
  console.log("String: ", valorString)

// Number - inteiros/real
  const valorNumberInteiro = 32
  const valorNumberReal =3.4
  console.log("Inteiro :", valorNumberInteiro)
  console.log("Real :", valorNumberReal)

//Boolean - logico
  const valorLogicoFalso =  false
  const valorLogicoVerdadeiro =  true
  console.log("Lógico falso :", valorLogicoFalso)
  console.log("Lógico verdadeiro :", valorLogicoVerdadeiro)
  console.log("Resultados são iguais?", valorLogicoFalso === valorLogicoVerdadeiro); //


// Array - Vetor (unidimensional)
const vetor = [10, 20, 30, 40];
console.log("Vetor:", vetor);
console.log("Primeiro elemento do vetor:", vetor[0]);

// Array - Matriz (bidimensional)
const matriz = [
  [1, 2],
  [3, 4]
];
console.log("Matriz:", matriz);
console.log("Elemento da linha 1, coluna 2:", matriz[0][1]); // valor 2


// BigInt - para números extremamente grandes
const numeroNormal = 9007199254740991; // Maior número seguro com Number
const numeroGrande = 9007199254740991n + 10n; // BigInt usa o "n" no final

console.log("Número normal (Number):", numeroNormal);
console.log("Número grande (BigInt):", numeroGrande);

// Symbol - identificador único
const simbolo1 = Symbol('id');

console.log("Símbolo 1:", simbolo1);
