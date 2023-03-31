import express from 'express';
import bodyParser from 'body-parser'
const app = express();
app.use(bodyParser.json());


let frases = [];

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

app.get('/phrases', (req, res) => {
  res.send(200, frases);
})

app.get('/random-phrases', (req, res) => {
  if(frases.length > 3) {
    const numerosSorteados = [];
    const frasesAleatorias = [];

    while (numerosSorteados.length < 3) {
      const numeroSorteado = randomIntFromInterval(0, frases.length - 1);

      if(!numerosSorteados.includes(numeroSorteado)) {
        const frasesAleatoria = frases[numeroSorteado];

        numerosSorteados.push(numeroSorteado);
        frasesAleatorias.push(frasesAleatoria) 
      }
    }

    res.send(200, frasesAleatorias);
    res.status(201).send('Listagem com sucesso!');
  }
  if(frases.length <= 3 && frases.length > 0) {
    res.send(200, frases);
    res.status(201).send('Listagem com sucesso!');
  }
  if(frases.length === 0 )
  res.send(200, frases);
  res.status(201).send('Listagem com sucesso!');

})

app.post('/phrase', (req, res) => {
  const { phrase } = req.body;
  frases.push(phrase)
  res.status(201).send('Frase cadastrada com sucesso!');
})

app.listen(8080, ()=> {
  console.log('Servidor está funcionando ')
})