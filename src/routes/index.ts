// Importa o framework Express, além dos tipos Request e Response para tipagem no TypeScript.
// O 'produtosRouter' e 'voosRouter' são importados de arquivos separados que provavelmente definem rotas para cada área da aplicação.
import express, { Request, Response } from "express";
import produtosRouter from  "./produtos"; // Importa as rotas de 'produtos'.
import voosRouter from "./voos"; // Importa as rotas de 'voos'.
import { interferir } from "../Middlewares/interferir";

// Cria uma instância do roteador do Express. O roteador é utilizado para definir e agrupar rotas da aplicação.
const router = express.Router();

// Adiciona o middleware 'interferir' a todas as rotas definidas dentro deste roteador.
// O middleware 'interferir' será executado antes de qualquer rota ser processada,
router.use(interferir);

// Associa o roteador 'produtosRouter' à rota '/produtos'.
// Isso significa que quando uma requisição for feita para '/produtos', o Express chamará as rotas definidas no 'produtosRouter'.
router.use("/produtos", produtosRouter);

// Associa o roteador 'voosRouter' à rota '/voos'.
// Isso significa que quando uma requisição for feita para '/voos', o Express chamará as rotas definidas no 'voosRouter'.
router.use("/voos", voosRouter);

// Define uma rota para o caminho raiz ('/') utilizando o método GET.
// Quando o cliente acessa o endereço 'http://localhost:3001/', esta rota será chamada.
router.get('/', (req: Request, res: Response) => {
    let name: String = "Boma"; // Define uma variável 'name' com o valor "Boma".
    let age: Number = 26; // Define uma variável 'age' com o valor 26.

    // Retorna um JSON com os dados 'name' e 'age' para o cliente que fez a requisição.
    res.json({ name, age });
});

// Exporta o roteador com todas as suas rotas definidas para ser utilizado em outros arquivos.
export default router;
