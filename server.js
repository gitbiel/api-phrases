const express = require('express');
const server = express();

server.get('/', (req, res) => {
  return res.json({mensagem: 'hello World'})
})

server.listen(8080, ()=> {
  console.log('Servidor está funcionando ')
})