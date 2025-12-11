import { Router } from "express";
import productService from "../services/productService.js";

const homeController = Router();

homeController.get('/', async (req, res) => {

    const products = await productService.getAll()
    res.render('home', { products });
});

export default homeController;