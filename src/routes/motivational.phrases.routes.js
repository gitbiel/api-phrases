import { Router } from "express";
import MotivationalPhrasesController from '../controllers/motivationalPhrasesController.js';
import motivationalPhraseRepository from "../repositories/motivationalPhrase.repository.js";
import motivationalPhrasesController from "../controllers/motivationalPhrasesController.js";

const routes = Router();

routes.post('/', MotivationalPhrasesController.create)
routes.get('/', motivationalPhrasesController.list)

export { routes as MotivationalPhrasesRoutes}