import FraseService from '../services/frases.service.js';
class FraseController {
  
 async create(request, response) {
    const { phrase } = request.body;
    try {
      await FraseService.create({ phrase });
      return response.status(204).send();
    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
  }

  async list(_request, response) {
    try {
      const result = await FraseService.list();
  
      return response.json(result);
     } catch (error) {
      return response.status(404).json({ message: error.message });
     }
  }  

  async listById(request, response) {
   try {
    const result = await FraseService.listById({
      fraseId: request.params.id
    });

    return response.json(result);
   } catch (error) {
    return response.status(404).json({ message: error.message });
   }
  }

  updateById(request, response){
    const result = FraseService.update({
      phraseId: request.params.id,
      phrase: request.body.phrase,
    })

    if(result?.isError) {
      return response.status(400).json({ message: result.message });
    }
    // 204 não envia nada para a response
    return response.status(204).send()
  }

  deleteById(request, response) {
    const result = FraseService.delete({
      phraseId: request.params.id
    });

    if(result?.isError) {
      return response.status(400).json({ message: result.message });
    }

    return response.status(204).send()
  }
}

export default new FraseController()
