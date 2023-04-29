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
      return {
        isError: true,
        message: 'Frase já existe!',
      }
    }
    
    frasesDB.push(novaFrase)
  }

  update({ phraseId, phrase }) {
    const indexPhrase = frasesDB.findIndex(({ id }) => id === phraseId);

    if(indexPhrase === -1) {
      return {
        isError: true,
        message: 'Frase não existe',
      }
    };

    frasesDB[indexPhrase].phrase = phrase;
  }

  delete({phraseId}) {
    const indexPhrase = frasesDB.findIndex(({ id }) => id === phraseId);

    if(indexPhrase === -1) {
      return {
        isError: true,
        message: 'Phrase não encontrada'
      };
    };

    frasesDB.splice(indexPhrase, 1);
  }
}
export default new FraseService()