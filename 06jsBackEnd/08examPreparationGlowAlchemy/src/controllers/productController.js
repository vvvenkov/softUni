import { Router } from 'express';
import { isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import productService from '../services/productService.js';

const productController = Router();

productController.get('/', async (req, res) => {
    const products = await productService.getAll();


    res.render('product/index', { products });
});


productController.get('/create', isAuth, (req, res) => {
    res.render('product/create');
});


productController.post('/create', isAuth, async (req, res) => {
    // Product data
    const productData = req.body;

    //Get ownerId
    const ownerId = req.user.id;

    try {
        // Call Product service
        await productService.create(productData, ownerId)

        //redirect
        res.redirect('/products')
    } catch (err) {
        res.render('product/create', { error: getErrorMessage(err), product: productData });
    }
});

productController.get('/:productId/details', async (req, res) => {
    // Get product id
    const productId = req.params.productId;

    // Get product from db
    const product = await productService.getOne(productId);

    // Chekc if recommended
    const isRecommended = product.recommends.includes(req.user?.id)

    // Check if owner
    const isOwner = product.owner.equals(req.user?.id)

    const recommendCount = product.recommends.length;

    // Render details page
    res.render('product/details', { product, isOwner, isRecommended, recommendCount });

});

productController.get('/:productId/recommend', isAuth, async (req, res) => {
    // Get productId
    const productId = req.params.productId;

    // Get userId
    const userId = req.user.id;

    try {
        // Recommend product
        await productService.recommend(productId, userId);

        // Redirect to details page
        res.redirect(`/products/${productId}/details`)
    } catch (err) {
        res.render('notFound', { error: getErrorMessage(err) })
    }
});

productController.get('/:productId/delete', isAuth, async (req, res) => {
    // Get product id
    const productId = req.params.productId;

    const userId = req.user.id;

    try {
        // Delete product 
        await productService.delete(productId, userId);

        // Redirect
        res.redirect('/products')
    } catch (err) {
        res.render('notFound', { error: 'Only the owner can delete this product!' })
    }
});

productController.get('/:productId/edit', isAuth, async (req, res) => {
    // Get product id
    const productId = req.params.productId;

    // Get product
    const product = await productService.getOne(productId);

    // Render edit page
    res.render('product/edit', { product })
});

productController.post('/:productId/edit', isAuth, async (req, res) => {
    // Get product id
    const productId = req.params.productId;

    // Get product data
    const productData = req.body;

    //Get user id
    const userId = req.user.id;

    try {
        await productService.edit(productId, productData, userId);

        res.redirect(`/products/${productId}/details`)
    } catch (err) {
        res.render('product/edit', { error: getErrorMessage(err), product: productData })
    }
});

export default productController;