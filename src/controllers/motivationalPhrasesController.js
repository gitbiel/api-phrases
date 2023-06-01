import MotivationalPhrasesService from '../services/motivationalPhrases.service.js';

class MotivationalPhrasesController {
  async create(request, response) {
    try {
      const { motivationalPhrase } = request.body;
      await MotivationalPhrasesService.create({ motivationalPhrase })

      return response.status(204).send();
    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
  }

  async list(_request, response) {
    try {
      const result = await MotivationalPhrasesService.list();
  
      return response.json(result);
    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
  }
}

export default new MotivationalPhrasesController();