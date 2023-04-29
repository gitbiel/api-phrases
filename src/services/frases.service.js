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
      throw new Error({
        message: 'Frase já existe!',
        detalhes: 'Phrase já cadastrada',
      });
    }
    
    frasesDB.push(novaFrase)
    return 'Frase cadastrada com sucesso!';
  }

  update({ id, phrase }) {
    return { phrase }
  }
}
export default new FraseService()