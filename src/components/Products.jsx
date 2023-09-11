import React from "react";
import './Products.css'
import { products as initializeProducts } from "../mokups/productos.json"
import { useFilters } from "../hooks/useFilter";
// import { filterProducts } from "../services/filterProducts";
//<img src={/*product.images[0]*/} alt={product.title} />
export function Products() {
    const { filters, filterProducts, setFilters } = useFilters()
    const products = filterProducts({ initializeProducts, filters })
    return (
        <main className="products">
            <ul className="productList">
                {
                    products.map(product => {
                        return (<li key={product.id} className="product">
                            <h3>{product.title}</h3>
                            <p>{product.price}</p>
                            <p>{product.category}</p>
                            <img src={product.images[0]} alt={product.title} />
                        </li>

                        )
                    })
                }
            </ul>
        </main>
    )
}