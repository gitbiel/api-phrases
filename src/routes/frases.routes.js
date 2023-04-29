import { Router } from "express";

import FraseController from '../controllers/frases.controller.js';
import { authenticationMiddleware, validatePhraseMiddleware } from '../middlewares/index.js';

const routes = Router();

routes.post('/', authenticationMiddleware, validatePhraseMiddleware, FraseController.create);
routes.get('/', FraseController.list);
routes.get('/random-phrases', FraseController.randomPhrases);
routes.get('/:id',FraseController.listById);
routes.put('/:id', validatePhraseMiddleware, FraseController.updateById);
routes.delete('/:id', authenticationMiddleware, FraseController.deleteById);

export { routes as frasesRoutes };