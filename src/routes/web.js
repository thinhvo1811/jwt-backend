import express from 'express';
import homeController from '../controller/homeController';

const router = express.Router();

/**
 *
 * @param {*} app - express app
 */
const initWebRoutes = (app) => {
    router.get('/', homeController.handleHelloWord);

    return app.use('/', router);
};

export default initWebRoutes;
