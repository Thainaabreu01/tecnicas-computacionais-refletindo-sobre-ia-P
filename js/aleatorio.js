const nomes = ["Thaina", "Maysa", "Vitor", "Larissa", "emily", "Regiane", "Rael"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
