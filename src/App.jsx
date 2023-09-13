import React, { useContext, useEffect, useState } from "react";
import './App.css'
import { CartIcon } from "./components/icon";
import { Products } from "./components/Products";
import { useCaregory } from './hooks/useCartegoryList'
import { useMaxRange } from "./hooks/useMaxRange";
import { useFilters } from "./hooks/useFilter";
import { CartProvider } from "./context/cart.jsx";
import { Cart } from "./components/Cart";



function App() {
    const { filters, setFilters } = useFilters()
    const { selectList } = useCaregory()
    const { maxRange, myRange } = useMaxRange()

    const handleCategoryChange = () => {
        const categorySelected = document.getElementById('category').value
        myRange({ categorySelected })//it bring me the max price for category selected
        const object2 = Object.assign({}, filters, { category: categorySelected })
        setFilters(object2)
        document.getElementById("myRange").value = 0
    }

    const handleRangeChange = () => {
        const priceSelected = document.getElementById("myRange").value
        const object2 = Object.assign({}, filters, { price: priceSelected })
        setFilters(object2)
    }
    return (
        <CartProvider>
            <header>
                <section className="headerTitle">
                    <h1>Shopping Cart</h1><CartIcon />
                </section>
                {selectList.length > 0 &&
                    <form action="submit">
                        <div className="categorySelector">
                            <label htmlFor="category">Select Category</label>
                            <select name="categoryName" id="category" onChange={handleCategoryChange}>
                                {
                                    selectList.map(category => {
                                        return (
                                            <option key={category.id} value={category.type.toLowerCase()}>{category.type.toUpperCase()}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="rangeSelector">
                            <input name="range" id="myRange" type="range" min="0" max={maxRange} step="5" value={filters.price ? filters.price : 0} onChange={handleRangeChange} />
                            <label className="minprice" htmlFor="range">0</label><label className="price" htmlFor="range">{filters.price}</label>
                        </div>
                    </form>
                }
            </header>
            <Cart />
            <Products filters={filters} />
        </CartProvider>
    )
}

export default App