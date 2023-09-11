import { useContext } from "react";
import { FilterContext } from "../context/filters";
export function useFilters() {

    const { filters, setFilters } = useContext(FilterContext)

    const filterProducts = ({ initializeProducts }) => {
        return initializeProducts.filter((product) =>
            product.price >= filters.price &&
            (
                filters.category === 'all' ||
                product.category === filters.category
            )

        )
    }

    return { filters, filterProducts, setFilters }
}
