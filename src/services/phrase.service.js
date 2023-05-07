
import { frasesDB } from '../db/index.js';
import PhraseRepository from '../repositories/phrase.repository.js'

class PhraseService {
  async create({ phrase }) {
    const phraseEncontrada = await PhraseRepository.listByPhrase({ phrase })
  
    if(phraseEncontrada) {
      throw new Error('Frase já existe!');
    }

    return await PhraseRepository.create({ phrase })
  }

  async list() {
    try {
      return await PhraseRepository.list()
    } catch (error) {
      throw new Error(error.message)
    }
  }

  
  async listById({fraseId}) {
    try {
      const result = await PhraseRepository.listById({ phraseId: fraseId })
  
      return { phrase: result.phrase}
    
    } catch (error) {
      throw new Error(error.message)
    }
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

  delete({ phraseId }) {
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
export default new PhraseService();
