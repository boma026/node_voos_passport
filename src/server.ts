// Importa a função 'createServer' do módulo 'node:http'.
// O 'createServer' é usado para criar um servidor HTTP no Node.js.
import { createServer } from "node:http";

// Cria o servidor usando a função 'createServer'.
// A função recebe um callback com dois parâmetros: 'req' (requisição) e 'res' (resposta).
// Quando o servidor recebe uma requisição, ele chama esse callback para processá-la e gerar uma resposta.
const server = createServer((req, res) => {
    // Finaliza a resposta HTTP enviando o conteúdo "Ola Mundo" para o cliente.
    // A função 'res.end()' é usada para enviar a resposta e fechar a conexão.
    res.end("Ola Mundo");
});

// Faz o servidor começar a ouvir requisições na porta 3000.
// A função 'listen' recebe a porta que o servidor deve escutar e um callback que é chamado quando o servidor está pronto.
server.listen(3000, () => {
    // Exibe uma mensagem no console indicando que o servidor está funcionando
    // e disponível para ser acessado no endereço "http://localhost:3000".
    console.log("Servidor funcionando em http://localhost:3000");
});
