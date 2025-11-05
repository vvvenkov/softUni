import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {
    res.send('It works | home controller');
});

export default homeController;