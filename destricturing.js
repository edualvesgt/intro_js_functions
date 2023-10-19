const camisaLacoste = {
    descricao: "Camisa Polo",
    preco: 589.97,
    tamanho: "m",
    cor: "Amarela",
    presente: true
}

const { descricao, preco } = camisaLacoste;

const { presente } = camisaLacoste;



console.log(`
Produto:
Descricao: ${descricao},
Preco: ${preco},
Presente: ${presente ? "sim" : "Nao"},

`);



const filme = {
    nome: "Fast and Furious",
    tipo: "Acao",
    nota: 10,
    melhorAtor: "Paul Walker"
}

const { nome, tipo, nota, melhorAtor } = filme

console.log(`
FILME:${nome},
Categoria : ${tipo},
Nota do Filme : ${nota},
Melhor Ator : ${melhorAtor}

`);



const arrFilme = [
    {
        nome: "Fast and Furious",
        tipo: "Acao",
        nota: 10,
        melhorAtor: "Paul Walker"
    },

    {
        nome: "Fast and Furious 2",
        tipo: "Acao",
        nota: 9,
        melhorAtor: "Paul Walker"
    },
    {
        nome: "Fast and Furious 5",
        tipo: "Acao",
        nota: 10,
        melhorAtor: "Paul Walker"
    }
]

arrFilme.forEach((f) => {

    const { nome, tipo, nota, melhorAtor } = f

    console.log(`
    FILME:${nome},
    Categoria : ${tipo.toUpperCase()},
    Nota do Filme : ${nota},
    Melhor Ator : ${melhorAtor}`)

})