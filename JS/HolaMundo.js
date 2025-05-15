const http = require('http'); //llama a una libreria es por eso el require

const servidor = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola, mundo!');
});

servidor.listen(3000, 'localhost', () => {
  console.log('Servidor ejecutándose en http://localhost:3000/');
});