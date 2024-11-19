import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Gatinho fofo brincando",
        imagem: "https://placecats.com/fluffy/400/200",
    },
    {
        id: 3,
        descricao: "Um gato relaxando no sofá",
        imagem: "https://placecats.com/chill/350/250",
    },
    {
        id: 4,
        descricao: "Gato curioso na janela",
        imagem: "https://placecats.com/window/300/300",
    },
    {
        id: 5,
        descricao: "Hora do banho do gato",
        imagem: "https://placecats.com/bath/450/300",
    },
    {
        id: 6,
        descricao: "Gatinho dormindo tranquilo",
        imagem: "https://placecats.com/sleep/500/350",
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => { // O nome da função de retorno é Arrow function.
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);

    res.status(200).json(posts[index]);
});

app.get("/livro", (req, res) => {
    const livro = {
        "titulo": "O Senhor dos Anéis",
        "autor": "J.R.R. Tolkien",
        "ano": 1954
    }
    res.status(200).json(livro);
});

app.get("/livros", (req, res) => {
    const livros = [
        {
            "titulo": "O Senhor dos Anéis",
            "autor": "J.R.R. Tolkien",
            "ano": 1954
        },
        {
            "titulo": "Título Exemplo",
            "autor": "Autor Exemplo",
            "ano": 2024
        },
        {
            "titulo": "Título Exemplo 2",
            "autor": "Autor Exemplo 2",
            "ano": 2024
        }
    ];

    res.status(200).json(livros);
});

app.use((req, res, next) => {
    res.status(404).send("Rota não encontrada.");
});