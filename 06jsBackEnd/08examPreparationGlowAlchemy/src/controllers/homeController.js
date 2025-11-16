import { Router } from "express";
import productService from "../services/productService.js";

const homeController = Router();

homeController.get('/', async (req, res) => {
    // last 3 products
    const products = await productService.getLatest();

    res.render('home', { products });
});

export default homeController;