import motivationalPhraseRepository from '../repositories/motivationalPhrase.repository.js'
import MotivationalPhrasesRepository from '../repositories/motivationalPhrase.repository.js'

class MotivationalPhrasesService {
  async create({ motivationalPhrase }) {
    try {
      await MotivationalPhrasesRepository.create({ motivationalPhrase })

      // const phraseAlreadyFound = 
      // if (phraseAlreadyFound) {
        
      // }      
    } catch (error) {
      throw error
    }
  }

  async list() {
    try {
      const motivationalPhrases = await motivationalPhraseRepository.list()

      return motivationalPhrases
    } catch (error) {
      throw error
    }
  }
}

export default new MotivationalPhrasesService();