//crear ids de forma incremental
//se implemente en pedidos múltiples, el cual rederiza la lista que usaremos posteriormente
//para agregar los pedidos.

let id = 0

export function getId(){
    return id++
}