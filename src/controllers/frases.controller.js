import { randomUUID } from 'crypto';
import { frases } from '../db/index.js';
// import { randomIntFromInterval } from '../utils/index.js';


class FraseController {
  create(request, response) {
    const { phrase } = request.body;

    if(!phrase) {
      return response.status(400).send('"phrase": é obrigatório')
    }
    
    if(typeof phrase !== 'string') {
      return response.status(404).json({
        message: 'Necessário cadastrar todos os dados: nome, telefone e cpf',
      });
    }
    
    if(phrase.length < 3) {
      return response.status(400).send('"phrase" precisa ter no minimo 3 caracteres')
    }

    const novaFrase = { 
      id: randomUUID(),
      phrase,
    };

    const fraseEncontrada = frases.find((frase) => (frase.phrase == novaFrase.phrase)
    );

    if(fraseEncontrada) {
      return response.status(400).json({
        message: 'Frase já existe!',
        detalhes: 'Phrase já cadastrada',
      });
    }
    
    frases.push(novaFrase)
    return response.status(201).send('Frase cadastrada com sucesso!');
  }

  list(_request, response) {
    response.send(200, frases);
  }  

  randomPhrases(_request, response) {
    function randomIntFromInterval(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min);
    } 

    if(frases.length > 3) {
      const numerosSorteados = [];
      const frasesAleatorias = [];
      let count = 0
      while (numerosSorteados.length < 3) {
        const numeroSorteado = randomIntFromInterval(0, frases.length - 1);
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
  
    if(frases.length <= 3 && frases.length > 0) {
      return response.send(200, frases);
    }
    
    if(frases.length === 0 ) {
      return response.send(200, frases);
    }
  }

  listById(request, response) {
    const { id } = request.params;
    const fraseEncontrada = frases.find((frase) => frase.id === id);
  
    if(!fraseEncontrada) {
      return response.status(404).json({
        message: 'frase não encontrada!'
      })
    }
  
    return response.json(fraseEncontrada);
  }

  updateById(request, response){
    const indexPhrase = frases.findIndex(({ id }) => id === request.params.id);

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

    frases[indexPhrase].phrase = phrase

    return response.json({ message: 'Phrase atualizada com sucesso!'});
  }

  deleteById(request, response) {
    const indexPhrase = frases.findIndex(({ id }) => id === request.params.id);

    if(indexPhrase === -1) {
      return response.status(404).json({
        message: 'Phrase não encontrada'
      });
    };

    frases.splice(indexPhrase, 1);
    return response.json({ message: 'Phrase deletada com sucesso!'});
  }
  
}

export default new FraseController();
