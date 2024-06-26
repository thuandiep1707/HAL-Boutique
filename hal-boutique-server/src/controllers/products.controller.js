import { ObjectId } from "mongodb"
import { productsCollection, hotProductsCollection } from "../models/mongoClient.model.js"

async function productListID (req, res, next){
    try{
        const category = req.params.category
        let data
        if (category == 'all'){
            let list = await productsCollection.find({}).limit(25).project({_id: 1}).toArray().then(res => res.map((product)=> product._id))
            data = list
        } else{
            let list = await productsCollection.find({category: category}).project({_id: 1}).toArray().then(res => res.map((product)=> product._id))
            data = list
        }
        req.data = {
            status: "201",
            message: "get product successfully",
            data: data
        }
    } 
    catch{
        req.data = {
            status: "500",
            message: "internal Server Error",
        }
    }
    next()
}

async function productNewListID (req, res, next){
    try{
        let quan = await productsCollection.find({category: "quan"}).limit(3).project({_id: 1}).toArray()
        let ao = await productsCollection.find({category: "ao"}).limit(3).project({_id: 1}).toArray()
        let dam = await productsCollection.find({category: "dam"}).limit(3).project({_id: 1}).toArray()
        let phukien = await productsCollection.find({category: "phukien"}).limit(3).project({_id: 1}).toArray()
        let chanvay = await productsCollection.find({category: "chanvay"}).limit(3).project({_id: 1}).toArray()
        let data = [quan.map(item=> item._id), ao.map(item=> item._id), dam.map(item=> item._id), phukien.map(item=> item._id), chanvay.map(item=> item._id)]
        req.data = {
            status: "201",
            message: "get new list product successfully",
            data: data
        }
    } 
    catch{
        req.data = {
            status: "500",
            message: "internal Server Error",
        }
    }
    next()
}

async function productDetail (req, res, next){
    try{
        const id = req.params.id
        let data = await productsCollection.findOne({_id: new ObjectId(id)})
        req.data = {
            status: "201",
            message: "get detail of product successfully",
            data: data
        }
    }
    catch{
        req.data = {
            status: "500",
            message: "internal Server Error",
        }
    }
    next()
}

async function suggestListID (req, res, next){
    try{
        const category = req.params.category
        const id = req.params.id
        let ProductList = await productsCollection.find({category: category}).project({_id: 1}).toArray()
        let data = []
        let index = ProductList.findIndex(product => product._id == id)
        while (data.length < 4){
            if (index == ProductList.length - 1) index = 0
            else index++
            data.push(ProductList[index]._id)
        }
        req.data = {
            status: "201",
            message: "get suggest list successfully",
            data: data
        }
    }
    catch{
        req.data = {
            status: "500",
            message: "internal Server Error",
        }
    }
    next()
}

async function hotProductListID (req, res, next){
    try{
        let data = await hotProductsCollection.find({}).toArray()
        let idList = data.map((product)=> product.productId)
        req.data = {
            status: "201",
            message: "get hot list successfully",
            data: idList
        }
    }
    catch{
        req.data = {
            status: "500",
            message: "internal Server Error",
        }
    }
    next()
}

async function searchListID(req,res,next){
    try{
        let keyword = req.params.keyword
        let data = await productsCollection
                        .find({"title": { "$regex": keyword, "$options": "i" }})
                        .project({
                            _id: 1, 
                            category: 1, 
                            title: 1, 
                            warehouse: 1, 
                            "img": {"$slice": [0, 1]}})
                        .toArray()
        req.data = {
            status: "201",
            message: "get search list successfully",
            data: data
        }
    }
    catch{
        req.data = {
            status: "500",
            message: "internal Server Error",
        }
    }
    next()
}

export { productListID, productNewListID, productDetail, suggestListID, hotProductListID, searchListID }