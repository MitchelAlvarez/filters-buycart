import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./icon.jsx";
import React from "react";
import "./Cart.css"
import { useCart } from "../hooks/useCart";

function CartItem({ thumbnail, price, title, quantity, addToCart, removeOneProduct }) {
    return (
        <li>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <button onClick={removeOneProduct}>-</button>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckboxId = useId()
    const { cart, addToCart, clearCart, removeOneProduct } = useCart()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id="{cartCheckboxId}" type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    {cart.map(product => {
                        const checkQuantity = cart.find(item => item.id === product.id)
                        if (checkQuantity.quantity > 0) {
                            return (<CartItem
                                key={product.id}
                                addToCart={() => addToCart(product)}
                                removeOneProduct={() => removeOneProduct(product)}
                                {...product}
                            />)
                        } else {
                            <></>
                        }

                    })
                    }

                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}