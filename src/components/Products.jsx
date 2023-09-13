import React from "react";
import './Products.css'
import { products as initializeProducts } from "../mokups/productos.json"
import { useFilters } from "../hooks/useFilter";
import { AddToCartIcon, RemoveFromCartIcon } from "./icon";
import { useCart } from "../hooks/useCart";
// import { filterProducts } from "../services/filterProducts";
//<img src={/*product.images[0]*/} alt={product.title} />
export function Products() {
    const { addToCart, clearCart, cart, removeOneProduct } = useCart()
    const { filters, filterProducts, setFilters } = useFilters()
    const products = filterProducts({ initializeProducts, filters })

    const checkInCart = product => {
        if (cart.length > 0) {
            const cartItem = cart.find(item => item.id === product.id);

            if (cartItem) {
                return {
                    isInCart: true,
                    quantity: cartItem.quantity
                };
            } else {
                return {
                    isInCart: false,
                    quantity: 0
                };
            }
        } else {
            const cartCheck = {
                isIncart: false,
                quantity: 0
            }
            return cartCheck
        }

    }


    const ProductAlreadyInCart = ({ quantity, addToCart, removeOneProduct }) => {
        return (
            <>
                <button className="removeCartBtn" onClick={() => clearCart()}><RemoveFromCartIcon /></button>
                <div>
                    <button onClick={removeOneProduct}>-</button><p>{quantity}</p><button onClick={addToCart}>+</button>
                </div>

            </>

        )
    }
    return (
        <main className="products">
            <ul className="productList">
                {
                    products.map(product => {
                        let isProductInCart = checkInCart(product)
                        return (<li key={product.id} className="product">
                            <h3>{product.title}</h3>
                            <p>{product.price}</p>
                            <p>{product.category}</p>
                            <img src={product.images[0]} alt={product.title} />
                            {isProductInCart.isInCart && isProductInCart.quantity > 0
                                ? <ProductAlreadyInCart quantity={isProductInCart.quantity} addToCart={() => addToCart(product)} removeOneProduct={() => removeOneProduct(product)} />
                                : <button className="addCartBtn" onClick={() => addToCart(product)}><AddToCartIcon /></button>
                            }



                        </li>

                        )
                    })
                }
            </ul>
        </main>
    )
}