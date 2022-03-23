import Product from '../models/Product'

export const addProduct = async(req, res) =>{
    try {
        console.log(req.body);
        const product = Product(req.body)
        await product.save() 
        res.redirect('/products')
    } catch (error) {
        console.log(error)
    }
}