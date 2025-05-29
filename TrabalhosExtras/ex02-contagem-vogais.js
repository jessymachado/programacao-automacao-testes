const frase = "  eu  jessica  siqueira machado moro em   canoas  "
let contVogais = 0

let itensSeparadosFrase = frase.split("")

itensSeparadosFrase.forEach((item) => {    
    contarVogaisNaString(item)
});

console.log("Quantidade de vogais: ", contVogais)


function contarVogaisNaString(item){    
    const vogais = ["a", "e", "i", "o", "u"];

    if (vogais.some(v => item.includes(v))) {        
        contVogais++;
    }
}