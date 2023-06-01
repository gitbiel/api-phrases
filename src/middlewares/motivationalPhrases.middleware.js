export function validateMotivationalPhraseMiddleware(request, response, next) {
  
  const { motivationalPhrase } = request.body;

  if(!motivationalPhrase) {
    return response.status(400).send('"motivationalPhrase": é obrigatório')
  }

  next();
  }