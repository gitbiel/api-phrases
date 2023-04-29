
import { frasesDB } from '../db/index.js';
import FraseService from '../services/frases.service.js';

class FraseController {
  create(request, response) {
    const { phrase } = request.body;
    const result = FraseService.create({ phrase });

    if(result?.isError) {
      return response.status(400).json({ message: result.message });
    }

    return response.status(201).json('Frase cadastrada com sucesso!')
  }

  list(_request, response) {
    response.send(200, frasesDB);
  }  FraseController

  randomPhrases(_request, response) {
    function randomIntFromInterval(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min);
    } 

    if(frasesDB.length > 3) {
      const numerosSorteados = [];
      const frasesAleatorias = [];
      let count = 0
      while (numerosSorteados.length < 3) {
        const numeroSorteado = randomIntFromInterval(0, frasesDB.length - 1);
        count++
        if(!numerosSorteados.includes(numeroSorteado)) {
          const frasesAleatoria = frases[numeroSorteado];
  
          numerosSorteados.push(numeroSorteado);
          frasesAleatorias.push(frasesAleatoria)
        }
      }
        response.send(200, frasesAleatorias);
        return response.status(201).send('Listagem com sucesso!');
    }
  
    if(frasesDB.length <= 3 && frasesDB.length > 0) {
      return response.send(200, frases);
    }
    
    if(frasesDB.length === 0 ) {
      return response.send(200, frasesDB);
    }
  }

  listById(request, response) {
    const { id } = request.params;
    const fraseEncontrada = frasesDB.find((frase) => frase.id === id);
  
    if(!fraseEncontrada) {
      return response.status(404).json({
        message: 'frase não encontrada!'
      })
    }
  
    return response.json(fraseEncontrada);
  }

  updateById(request, response){
    const result = FraseService.update({
      phraseId: request.params.id,
      phrase: request.body.phrase,
    })

    if(result?.isError) {
      return response.status(400).json({ message: result.message });
    }

    // 3º devolver a response seja ela sucesso ou erro

    const indexPhrase = frasesDB.findIndex(({ id }) => id === request.params.id);

    if(indexPhrase === -1) {
      return response.status(404).json({
        message: 'Phrase não encontrada!'
      });
    };

    const { phrase } = request.body;

    if(!phrase) {
      return response.status(400).send('"phrase": é obrigatório')
    }
    
    if(typeof phrase !== 'string') {
      return response.status(404).json({
        message: 'phrase precisa ser string',
      });
    }
    
    if(phrase.length < 3) {
      return response.status(400).send('"phrase" precisa ter no minimo 3 caracteres')
    }

    frasesDB[indexPhrase].phrase = phrase

    return response.json({ message: 'Phrase atualizada com sucesso!'});
  }

  deleteById(request, response) {
    const indexPhrase = frasesDB.findIndex(({ id }) => id === request.params.id);

    if(indexPhrase === -1) {
      return response.status(404).json({
        message: 'Phrase não encontrada'
      });
    };

    frasesDB.splice(indexPhrase, 1);
    return response.json({ message: 'Phrase deletada com sucesso!'});
  }
}

export default new FraseController()
