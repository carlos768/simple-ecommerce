import { Router } from "express";
import * as productsController from "../controllers/products.controller"
import * as authJwt from "../middlewares/auth.jwt";

const router = Router()

router.post('/add/product', productsController.addProduct)

// [authJwt.verifyToken, authJwt.isModerator]

export default router