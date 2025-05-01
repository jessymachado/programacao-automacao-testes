/*  Validador de nomes para as tags
    Alguns donos estão registrando os dogs com nomes mal formatados. Crie um script para limpar a padronizar os nomes.

    Aplique as formatações e exiba:
     - O nome original, como foi cadastrado.
     - O nome formatado

    EXTRA:
     - aplique uma regra que confira se o nome informado possuir apenas uma palavra.
     - exiba se o nome é valido ou não.
    
*/

let nomeTag = "  Laninha mARIA";
let nomeTagSemEspacos = nomeTag.trim();

let nomeFormatado = nomeTagSemEspacos.toUpperCase();
let qtdItensArray = nomeFormatado.split(" ").length;

console.log("Nome original : ", nomeTag);
console.log("Nome formatado: ", nomeFormatado);

if(qtdItensArray > 1)
    console.log("Validação da tag: O nome da tag é inválido!")
else
    console.log("Validação da tag: O nome da tag é válido!")