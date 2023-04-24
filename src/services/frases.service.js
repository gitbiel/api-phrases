import { randomUUID } from 'crypto';
import { frasesDB } from '../db/index.js';
class FraseService {
  create({ phrase }) {
    const novaFrase = { 
      id: randomUUID(),
      phrase,
    };

    const fraseEncontrada = frasesDB.find((frase) => (frase.phrase == novaFrase.phrase)
    );

    if(fraseEncontrada) {
      return response.status(400).json({
        message: 'Frase já existe!',
        detalhes: 'Phrase já cadastrada',
      });
    }
    
    frasesDB.push(novaFrase)
    return response.status(201).send('Frase cadastrada com sucesso!');
  }
}

export default new FraseService()