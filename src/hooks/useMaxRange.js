import { useState } from "react";
import { products as initializeProducts } from "../mokups/productos.json"
import { getMAxRange } from "../services/getMaxRange";


export function useMaxRange() {
    const [maxRange, setMaxRange] = useState(getMAxRange({ categorySelected: null, initializeProducts }))

    const myRange = ({ categorySelected }) => {
        let oldMax = getMAxRange({ categorySelected, initializeProducts })
        setMaxRange(oldMax)
    }

    return { maxRange, myRange }
}