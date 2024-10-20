import { ObjectId } from "mongodb"
import bcrypt from "bcrypt"

import { accountsCollection } from "../models/mongoClient.model.js"
import { userSchema } from "../models/mongoSchema.model.js"

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);


async function registerNewUser (req, res, next) {
    try{
        let data = req.body
        if (await accountsCollection.findOne({username: data.username})) {
            req.data = {
                status: "409",
                message: "username already exists"
            }
            next()
        }
        userSchema.username = data.username
        userSchema.password = bcrypt.hashSync(data.password, salt)
        userSchema.birthday = data.birthday
        userSchema.email = data.email
        userSchema.phoneNumber = data.phoneNumber
        userSchema.address = data.address
        await accountsCollection.insertOne(userSchema)
        req.data = {
            status: "201",
            message: "register successfully",
        }
    }
    catch{
        req.data = {
            status: "500",
            message: "internal Server Error"
        }
    }
    next()
}

async function checkLogin (req, res, next){
    try{
        const username = req.body.username
        const password = req.body.password
        const getInfor = await accountsCollection.findOne({username: username})
        if (!getInfor){
            req.data = {
                status: "409",
                message: "username is not found"
            }
            next()
        }
        if (bcrypt.compareSync(password, getInfor.password)){
            req.data = {
                status: "201",
                message: "login successfully",
                ObjectId: getInfor._id
            }
            next()
        }
        req.data = {
            status: "409",
            message: "password is incorrect"
        }
        next()
    }
    catch{
        req.data = {
            status: "500",
            message: "internal Server Error"
        }
        next()
    }
}

async function getUserInfor (req, res, next){
    try{
        const id = req.params.id
        const getInfor = await accountsCollection.findOne({_id: new ObjectId(id)})
        let data = {
            username: getInfor?.username,
            name: getInfor?.name,
            birthday: getInfor?.birthday,
            email: getInfor?.email,
            phoneNumber: getInfor?.phoneNumber,
            address: getInfor?.address,
            sex: getInfor?.sex,
            avatar: getInfor?.avatar
        }
        req.data = {
            status: "201",
            message: "get user successfully",
            data: data
        }
    }
    catch{
        req.data = {
            status: "500",
            message: "internal Server Error"
        }
    }
    next()
}

async function updateUserInfor (req, res, next){
    try{
        const newInfor = new Object(req.body)
        const filter = {username: newInfor.username}
        delete newInfor.username
        const updateDoc = {
            $set: {
                ...newInfor
            }
        }
        let dbres = await accountsCollection.updateOne(filter, updateDoc)
        if (dbres.matchedCount == 0){
            req.data = {
                status : "409",
                message: "update user failed"
            }
            next()
        }
        req.data = {
            status : "201",
            message: "update user successfully"
        }
    }
    catch{
        req.data = {
            status: "500",
            message: "internal Server Error"
        }
    }
    next()
}

async function addNewOrder (req, res, next){
    try{
        const id = new ObjectId(req.headers['user-id'])
        const data = req.body
        const bdres = await accountsCollection.findOneAndUpdate(
            { _id: id },
            { $push: { orders: data } },
            { new: true}
        )
        if (bdres){
            req.data = {
                status: "201",
                message: "checkout successfully"
            }
            next()
        }
    }
    catch{
        req.data = {
            status: "500",
            message: "internal Server Error"
        }
    }
    next()
}

async function getOrderList (req, res, next){
    try{
        const id = req.params.id
        const data = await accountsCollection.find({_id: new ObjectId(id)}).project({_id: 0, orders: 1}).toArray().then(res => res[0].orders)
        req.data = {
            status: "201",
            message: "get order successfully",
            data: data
        }
    }
    catch{
        req.data = {
            status: "500",
            message: "internal Server Error"
        }
    }
    next()
}

export { registerNewUser, checkLogin, getUserInfor, updateUserInfor, addNewOrder, getOrderList }