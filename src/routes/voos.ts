import express, { query, Request, Response } from "express";

const router = express.Router();

// EXEMPLO DE ROTA ESTÁTICA
// Define uma rota que responde a requisições GET para o caminho '/voos'. Ela retorna uma resposta em JSON, que nesse caso é uma lista vazia.
router.get("/", (req: Request, res: Response) => { //  Como o path "voos" ja esta espicificado no servidor, entao nao precisa colocar novamente
    res.json({ flights: [] });
});

// EXEMPLO DE ROTA DINÂMICA
// Define uma rota que captura parâmetros dinâmicos na URL, como '/voos/:from/:to'. Os parâmetros são acessados através de 'req.params'.
router.get("/:from/:to", (req: Request, res: Response) => {
   console.log(req.params); // Mostrando no console como pegar os parametros pela requisiçao
   console.log(req.query); // Mostrando no console como pegar as query pela requisição
    // Desestrutura os parâmetros da URL usando 'req.params'. 'from' e 'to' são extraídos diretamente da URL.
   const { from, to } = req.params;

   // Responde com um JSON que inclui os valores dos parâmetros, além de um preço fictício.
   res.json({ 
       flight: {
           from: from.toUpperCase(), // Converte o valor de 'from' para maiúsculas antes de enviar na resposta.
           to: to.toUpperCase(), // Converte o valor de 'to' para maiúsculas antes de enviar na resposta.
           price: 123456 // Preço fictício do voo.
       }
   });
});


export default router;