const fs = require('fs');
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

// console.log('link = ' + link);
// console.log('caminho = ' + caminhoArquivo);

fs.readFile(link, 'utf-8', (erro, texto) => {
  console.log(texto);
});

console.log();