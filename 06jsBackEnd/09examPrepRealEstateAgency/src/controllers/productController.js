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

productController.get('/report', async (req, res) => {
    const products = await productService.getAll();

    res.render('product/report', { products });
});


productController.post('/create', isAuth, async (req, res) => {
    const productData = req.body;

    const ownerId = req.user.id;

    try {
        await productService.create(productData, ownerId)

        res.redirect('/product')
    } catch (err) {
        res.render('product/create', { error: getErrorMessage(err), product: productData });
    }
});

productController.get('/:productId/details', async (req, res) => {
    const productId = req.params.productId;

    const product = await productService.getOne(productId);

    const isLiked = product.likedList.includes(req.user?.id)

    const isOwner = product.owner.equals(req.user?.id)

    const likeCount = product.likedList.length;

    res.render('product/details', { product, isLiked, isOwner, likeCount });

});

productController.get('/:productId/like', isAuth, async (req, res) => {
    const productId = req.params.productId;
    const userId = req.user.id;

    try {
        await productService.like(productId, userId);
        res.redirect(`/product/${productId}/details`);
    } catch (err) {
        res.render('product/details', {
            product: await productService.getOne(productId),
            error: getErrorMessage(err),
            isAuthenticated: true,
            isOwner: req.user.id === (await productService.getOne(productId)).owner.toString(),
            isLiked: true
        });
    }
});


productController.get('/:productId/delete', isAuth, async (req, res) => {
    const productId = req.params.productId;

    const userId = req.user.id;

    try {
        await productService.delete(productId, userId);

        res.redirect('/product/')
    } catch (err) {
        res.render('notFound', { error: 'Only the owner can delete this product!' })
    }
});

productController.get('/:productId/edit', isAuth, async (req, res) => {
    const productId = req.params.productId;

    const product = await productService.getOne(productId);

    res.render('product/edit', { product })
});

productController.post('/:productId/edit', isAuth, async (req, res) => {
    const productId = req.params.productId;

    const productData = req.body;

    const userId = req.user.id;

    try {
        await productService.edit(productId, productData, userId);

        res.redirect(`/product/${productId}/details`)
    } catch (err) {
        res.render('product/edit', { error: getErrorMessage(err), product: productData })
    }
});

export default productController;