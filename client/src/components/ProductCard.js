const ProductCard = ({id, productName, price, stock, productImage}) => {
    return(
        <div className="product-card" key={id}>
            <div className="product-card__img">
                <img src={productImage} alt="producto" />
            </div>
            <h3 className="product-title">{productName}</h3>
            <p className="product-price">Price: {price}</p>
            <p className="product-stock">stock: {stock}</p>
            <button className="btn-reg">Buy</button>
        </div> 
    )
}

export default ProductCard