import { Router } from "express";
import User from "../models/User"
import Product from "../models/Product";
import path from 'path'

const router = Router()


router.get('/products', async(req, res) =>{
    try {
        const productDB = await Product.find()
        res.status(200).json(productDB)
    } catch (error) {
        console.log(error)
    }
})

router.get('/manage-products', async(req, res) =>{
    try {
        const productDB = await Product.find().lean()
        res.render('manage-products', {
            productDB : productDB
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/users', async (req, res) =>{
    try {
        const usersDB = await User.find()
        res.status(200).json(usersDB)
    } catch (error) {
        console.log(error)
    }
})

router.get('/prueba', (req,res) =>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '/prueba.html'))
})

export default router
