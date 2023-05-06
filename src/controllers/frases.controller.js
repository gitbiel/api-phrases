
import { frasesDB } from '../db/index.js';
import FraseService from '../services/frases.service.js';

class FraseController {
  create(request, response) {
    const { phrase } = request.body;
    const result = FraseService.create({ phrase });

    if(result?.isError) {
      return response.status(400).json({ message: result.message });
    }

    return response.status(201).json('Frase cadastrada com sucesso!')
  }

  list(_request, response) {
    response.status(200).send(frasesDB);
  }  

  listById(request, response) {
    const result = FraseService.listById({
      fraseId: request.params.id
    });

    if(result?.isError) {
      return response.status(404).json({ message: result.message });
    }

    return response.json(result.fraseEncontrada);
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
