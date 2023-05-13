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
      return await PhraseRepository.list();
    } catch (error) {
      throw error
    }
  }
  
  async listById({fraseId}) {
    try {
      const result = await PhraseRepository.listById({ phraseId: fraseId });

      return { phrase: result.phrase}
    } catch (error) {
      throw error
    }
  }

  async update({ phrase, phraseId }) {
    const phraseEncontrada = await PhraseRepository.update({ phrase, phraseId })

    if(!phraseEncontrada) {
      return {
        isError: true,
        message: 'Frase não existe',
      }
    };
  }

  async delete({ phraseId }) {
    try {
      await PhraseRepository.listById({ phraseId });
      return await PhraseRepository.delete({ phraseId});
    } catch (error) {
      throw error
    }
  }
}
export default new PhraseService();
