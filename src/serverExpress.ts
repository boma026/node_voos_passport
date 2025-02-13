// Importa o módulo 'express', que é um framework para criar servidores web de maneira fácil e rápida no Node.js.
// O 'express' simplifica a criação de rotas, a manipulação de requisições e respostas, entre outras funcionalidades.
import express, { Request, Response } from "express"; // Importa os tipos Request e Response também, para tipagem no TypeScript.
import helmet from "helmet"; // Helmet é um middleware que ajuda a proteger a aplicação definindo cabeçalhos HTTP seguros.
import path from "path"; // O módulo 'path' fornece utilitários para trabalhar com caminhos de arquivos no sistema operacional.
import router from "./routes"; //Esse router é um objeto do tipo Router do Express que agrupa todas as rotas da aplicação
import { errorHandler, notFoundRequest } from "./routes/errorhandler";

// Cria uma instância do servidor Express.
const server = express();

// Middleware que ajuda a proteger a aplicação contra vulnerabilidades comuns, como ataques de injeção de cabeçalhos HTTP.
server.use(helmet());

// Middleware para analisar requisições com corpo em JSON. O 'express.json()' converte o corpo da requisição em um objeto JavaScript.
server.use(express.json());

// Usado para interpretar o corpo de requisições HTTP que enviam dados em formato application/x-www-form-urlencoded, como os dados de um formulário HTML.
server.use(express.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos (como imagens, CSS, JS, etc.) a partir de um diretório público.
// O caminho para o diretório público é definido dinamicamente com 'path.join', tornando o código mais portável entre diferentes sistemas operacionais.
server.use(express.static(path.join(__dirname, "../public")));

server.use("/", router);
server.use(notFoundRequest);
server.use(errorHandler);

// Faz o servidor começar a escutar requisições na porta 3001.
// O método 'listen' inicia o servidor e o coloca em modo de escuta, aguardando requisições.
server.listen(3001, () => {
    // Exibe uma mensagem no console quando o servidor está pronto e funcionando.
    console.log("Servidor funcionando em http://localhost:3001");
});

// Comando para compilar o código e iniciar o servidor:
// 'node --env-file=.env --import=tsx --watch ./src/serverExpress.ts' para compilar automaticamente ao salvar mudanças.