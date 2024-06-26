import express from 'express';

import { registerNewUser, checkLogin, getUserInfor, updateUserInfor, addNewOrder, getOrderList } from '../controllers/authenticate.controller.js';
const authenticate = express.Router();

authenticate.get('/user/:id', getUserInfor, (req, res, next)=>{
    res.json(req.data)
})

authenticate.get('/order/list/:id', getOrderList, (req, res, next)=>{
    res.json(req.data)
})

authenticate.post('/checkout', addNewOrder, (req, res, next)=>{
    res.json(req.data)
})

authenticate.post('/register', registerNewUser, (req, res, next)=>{
    res.json(req.data)
})

authenticate.put('/login', checkLogin, (req, res)=>{
    res.json(req.data)
})

authenticate.put('/update', updateUserInfor, (req, res, next)=>{
    res.json(req.data)
})

export default authenticate;