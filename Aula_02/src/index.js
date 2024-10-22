const fs = require('fs');
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
  if (erro) {
    console.error('Erro ao ler o arquivo:', erro);
    return;
  }
  verificaPalavrasDuplicadas(texto);
});

function verificaPalavrasDuplicadas(texto) {
  const arrayDePalavras = texto.split(' ');
  const resultado = {};
  arrayDePalavras.forEach((palavra) => {
    resultado[palavra] = (resultado[palavra] || 0) + 1;
  });
  console.log(resultado);
}
