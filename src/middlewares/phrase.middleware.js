// Validate
export function createPhraseMiddleware(request, response, next) {
  // Executar a lógica do middleware aqui

  const { phrase } = request.body;

  if(!phrase) {
    return response.status(400).send('"phrase": é obrigatório')
  }
  
  if(typeof phrase !== 'string') {
    return response.status(404).json({
      message: 'Necessário cadastrar todos os dados: nome, telefone e cpf',
    });
  }
  
  if(phrase.length < 3) {
    return response.status(400).send('"phrase" precisa ter no minimo 3 caracteres')
  }

  // Chamar a função next() para passar o controle para o próximo middleware
  next();
}