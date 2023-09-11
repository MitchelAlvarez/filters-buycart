import { createContext, useState } from "react";
import React from "react";

export const FilterContext = createContext({
    category: 'all',
    price: 0
})

export function FilterProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        price: 0
    })
    return (
        <FilterContext.Provider value={
            {
                filters,
                setFilters
            }
        }>
            {children}
        </FilterContext.Provider>
    )
}