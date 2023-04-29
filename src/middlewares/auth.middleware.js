export function authenticationMiddleware(req, res, next) {
  console.log(req.headers)
  if(req.headers.authorization !== 'token-caio') {
    res.status(400).send('Você precisa estar autenticado para acessar essa rota');
  }
  next()
}