import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { get } from 'axios'

const ManageProducts = () => {
    const [productList, setProductList] = useState([])

    useEffect(() =>{
        const getAllProducts = async() =>{
            try {
                const res = await get('http://localhost:3001/products')
                setProductList(res.data)
            } catch (error) {
                console.log(error);                
            }
        } 
        getAllProducts()
    },[])

    return(
        <>
    <table>
        <thead>
        <tr>
          <th>#</th>
          <th style={{width: '80px'}}>Image</th>
          <th>Product name</th>
          <th>Price</th>
          <th>stock</th>
          <th>Action</th>
        </tr>
        </thead>

        <tbody>
        {productList.map(p =>{
            return(
        <tr key={p._id}>
            <td >{p._id}</td>
            <td><img src={p.productImage} alt='product' width={'80px'}/></td>
            <td>{p.productName}</td>
            <td>{p.price}</td>
            <td>{p.stock}</td>
            <td><button>Edit</button></td>
        </tr>
            )
        })}
        </tbody>
    </table>
    <Link className='btn-back' to="/admin">Back</Link>
        </>
    )
}

export default ManageProducts