import { Router } from "express";

import FraseController from '../controllers/frases.controller.js';

const routes = Router();

routes.post('/',FraseController.create);
routes.get('/', FraseController.list);
routes.get('/random-phrases', FraseController.randomPhrases);
routes.get('/:id', FraseController.listById)
routes.put('/:id', FraseController.updateById)
routes.delete('/:id', FraseController.deleteById)

export { routes as frasesRoutes };