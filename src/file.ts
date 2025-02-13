import { readFile, writeFile } from "fs/promises"; // Importa as funções readFile e writeFile do módulo fs/promises para ler e escrever arquivos de forma assíncrona

const exec = async () => {
   console.log("Escrevendo no arquivo..."); // Exibe uma mensagem no console informando que o processo de escrita no arquivo está começando.

   const lista = ["bonieky", "João", "Pedro"]; // Define um array com três nomes.
   let listTxt = lista.join("\n"); // Junta os itens do array 'lista' em uma única string, com cada item separado por uma nova linha (\n).

   await writeFile("./teste.txt", listTxt); // Escreve a string 'listTxt' no arquivo 'teste.txt'. O arquivo será criado ou sobrescrito.
   console.log("pronto");  // Exibe uma mensagem no console informando que a escrita no arquivo foi concluída.

   const fileContent = await readFile("./teste.txt", { encoding: "utf8" }); // Lê o conteúdo do arquivo 'teste.txt' de forma assíncrona, com a codificação UTF-8.
   
   const list = fileContent.split("\n"); // Separa o conteúdo do arquivo em um array de strings, usando a quebra de linha como delimitador.
   
   list.push("alguem"); // Adiciona o nome "alguem" ao final do array 'list'.

   listTxt = list.join("\n"); // Junta novamente o array 'list' em uma string, com cada item separado por uma nova linha (\n).

   await writeFile("./teste.txt", listTxt); // Reescreve o arquivo 'teste.txt' com o novo conteúdo (a lista original mais o novo item).

   console.log(list); // Exibe o array 'list' no console, que agora inclui os nomes originais mais "alguem".

   // await unlink("./teste.txt") // (Comentado) Função para deletar o arquivo 'teste.txt', caso seja necessário. A função unlink remove o arquivo.
}

exec(); // Chama a função 'exec' para executar o código acima de forma assíncrona.
