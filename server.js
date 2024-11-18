import express from "express";

const app = express();
app.listen(3000, () => { // O nome da função de retorno é Arrow function.
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à imersão!");
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