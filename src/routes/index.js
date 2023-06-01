import { Router } from "express";

import { phrasesRoutes } from './phrases.routes.js';
import { MotivationalPhrasesRoutes } from './motivational.phrases.routes.js'

const routes = Router();

routes.use('/phrase', phrasesRoutes);
routes.use('/motivationalPhrases', MotivationalPhrasesRoutes)

export { routes };