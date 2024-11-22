import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => { // O nome da função de retorno é Arrow function.
    console.log("Servidor escutando...");
});

app.use((req, res, next) => {
    res.status(404).send("Rota não encontrada.");
});
