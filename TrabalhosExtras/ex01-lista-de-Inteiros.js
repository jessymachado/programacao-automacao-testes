const listaInicial = [-3, -5.4, 0, 4, 5.6, "teste", "ABC324", "  ", false, true, "335", "$)*(&(&#*("]
let listaInteiros = []

listaInicial.forEach((item) => {    
    criarNovaListaComInteiros(item)
});

console.log("Lista de Inteiros: ", listaInteiros)
  
function criarNovaListaComInteiros(item){
    if (typeof item === 'number' && Number.isInteger(item)) {
        listaInteiros.push(item);
    }        
}