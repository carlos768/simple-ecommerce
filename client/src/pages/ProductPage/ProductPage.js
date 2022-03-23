import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";

const ProductPage = () => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        const getProducts = async () => {
            try {
                const res = await axios.get('http://localhost:3001/products')
                setProducts(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getProducts()
    },[])


    return(
        <>
        <h2>Products page</h2>
        <hr />
        <div className="products-grid">
            {products.map(p => {
                return(
                    <ProductCard
                        key={p._id}
                        productName={p.productName}
                        price={p.price}
                        stock={p.stock}
                        productImage={p.productImage}
                    />         
                )
            })}
        </div>
        </>
    )
}

// filteredProducts.map((item) => <Product item={item} key={item.id}/>)

export default ProductPage

