import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios, { post } from 'axios'
const AddProduct = () => {

    const [pName, setPName] = useState("")
    const [pPrice, setPPrice] = useState(0)
    const [pStock, setPStock] = useState(0)
    const [pImage, setPImage] = useState("")

    const showAlert = (message, cssClass) =>{
        
    }

    const postProduct = () => {
        const pn = document.getElementById('productName')
        const pp = document.getElementById('price')
        const ps = document.getElementById('stock')
        const pi = document.getElementById('productImage')

        try {
            const res = axios.post('http://localhost:3001/api/products/add/product',
            {
                productName: pName,
                price: pPrice,
                stock: pStock,
                productImage: pImage
            }
            )
            console.log(res);
            pn.value = ""
            pp.value = ""
            ps.value = ""
            pi.value = ""
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <>
    <div className='form'>
        <input className="form-item" type="text" name="productName" id='productName' placeholder="Product Name" onChange={(e) =>{setPName(e.target.value)}}/>
        <input className="form-item" type="number" name="price" id='price' placeholder="price" onChange={(e) =>{setPPrice(e.target.value)}}/>
        <input className="form-item" type="number" name="stock" id='stock' placeholder="stock" onChange={(e) =>{setPStock(e.target.value)}}/>
        <input className="form-item" type="text" name="productImage" id='productImage' placeholder="Image" defaultValue="./public/images/" onChange={(e) =>{setPImage(e.target.value)}}/>
        <button className="btn-reg" onClick={postProduct}>Add product</button>
    </div>
    <Link className="btn-back" to="/admin">Back</Link>
        </>
    )
}

export default AddProduct