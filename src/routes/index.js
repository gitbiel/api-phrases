import { Router } from "express";

import { frasesRoutes } from './frases.routes.js';

const routes = Router();

routes.use('/phrase', frasesRoutes);
routes.use('/Random-phrases', frasesRoutes);

export { routes };