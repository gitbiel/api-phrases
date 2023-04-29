import { Router } from "express";

import FraseController from '../controllers/frases.controller.js';
import { authenticationMiddleware, createPhraseMiddleware } from '../middlewares/index.js';

const routes = Router();

routes.post('/', authenticationMiddleware, createPhraseMiddleware, FraseController.create);
routes.get('/', FraseController.list);
routes.get('/random-phrases',FraseController.randomPhrases);
routes.get('/:id',FraseController.listById);

// 1º add um middleware que valide se tenho o necessário para enviar para o controller

routes.put('/:id', FraseController.updateById);
routes.delete('/:id', FraseController.deleteById);

export { routes as frasesRoutes };