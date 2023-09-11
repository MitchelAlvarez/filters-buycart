import { useState, useEffect } from "react"
import { useProducts } from "./useProducts";

export function useCaregory() {
    const [selectList, setSelectList] = useState({ id: 0, type: 'ALL' })
    const { initializeProducts } = useProducts()

    useEffect(() => {
        let categoryList = [selectList]
        let checkCategory = {}
        initializeProducts.map(product => {
            if (!(product.category in checkCategory)) {
                checkCategory[product.category] = 1
                categoryList.push({ id: product.id, type: product.category })
            } else checkCategory[product.category]++
        })
        setSelectList(categoryList)
    }, [])

    return { selectList }

}