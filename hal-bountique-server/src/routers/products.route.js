import express from 'express';
import { productListID, productNewListID, productDetail, suggestListID, hotProductListID, searchListID } from '../controllers/products.controller.js';

const products = express.Router();

products.get('/hot-products', hotProductListID, (req, res, next)=>{
    res.json(req.data)
})

products.get('/category/new', productNewListID, (req, res, next)=>{
    res.json(req.data)
})

products.get('/category/:category',productListID, (req, res)=>{
    res.json(req.data)
})

products.get('/product/:id', productDetail,(req, res, next)=>{
    res.json(req.data)
})

products.get('/suggest/:category/:id', suggestListID, (req, res, next)=>{
    res.json(req.data)
})

products.get('/search/:keyword', searchListID , (req, res, next)=>{
    res.json(req.data)
})

export default products;