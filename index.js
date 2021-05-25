let propriedades = {
    extremamente: "preguiçoso",
    muito: "calmo",
    nome: "ian",
}

console.log(propriedades)

propriedades.hobbie = "ver anime";

console.log(propriedades)

delete propriedades.nome;

console.log(propriedades)

let cadastro = [
    {
        nome: "toshinori",
        idade: 49,
        telefone: 9-9999-9999,
        amigos: ["a1","a2","a3","a4"]
    },
    {
        nome: "izayoi",
        idade: 17,
        telefone: 9-9999-9999,
        amigos: ["a1","a2","a3","a4"]
    },
    {
        nome: "onoda",
        idade: 16,
        telefone: 9-9999-9999,
        amigos: ["a1","a2","a3","a4"]
    },
    {
        nome: "todoroki",
        idade: 18,
        telefone: 9-9999-9999,
        amigos: ["a1","a2","a3","a4"]
    },
    {
        nome: "asta",
        idade: 15,
        telefone: 9-9999-9999,
        amigos: ["a1","a2","a3","a4"]
    },
]

console.log(
    cadastro[0].amigos[0],
    cadastro[2].amigos[2],
    cadastro[1].amigos[3],
    cadastro[4].amigos[1]
    );