import { useState } from "react"
import { products as initializeProducts } from "../mokups/productos.json"
export function useProducts() {

    return { initializeProducts }
}