import PhraseService from '../services/phrase.service.js';
class PhraseController {
/**
 *
 * @param { { body: { phrase: string } } } request
 * @param { { body: { phrase: string } } } response
 * @returns { Promise<void> }
 */
 async create(request, response) {
    const { phrase } = request.body;
    try {
      await PhraseService.create({ phrase });
      return response.status(204).send();
    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
  }

  async list(_request, response) {
    try {
      const result = await PhraseService.list();
  
      return response.json(result);
     } catch (error) {
      return response.status(404).json({ message: error.message });
     }
  }  

  async listById(request, response) {
   try {
    const result = await PhraseService.listById({
      fraseId: request.params.id
    });

    return response.json(result);
   } catch (error) {
    return response.status(404).json({ message: error.message });
   }
  }

  async updateById(request, response) {
    try {
      const { phrase } = request.body;
      const { id: phraseId } = request.params;

      await PhraseService.update({ phrase, phraseId });
      return response.status(204).send()
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }

  async deleteById(request, response) {
    try {
      await PhraseService.delete({
        phraseId: request.params.id
      });

      return response.status(204).send()
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export default new PhraseController();
