import { Router } from "express";
import homeController from "./controllers/homeController.js";
import userController from "./controllers/userController.js";
import productController from "./controllers/productController.js";

const routes = Router();

routes.use(homeController);
routes.use('/user', userController);
routes.use('/product', productController)

routes.all('*url', (req, res) => {
    res.render('notFound')
})

export default routes;