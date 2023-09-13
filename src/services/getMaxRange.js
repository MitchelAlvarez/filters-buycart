export function getMAxRange({ categorySelected, initializeProducts }) {
    let oldMax = 0
    categorySelected && categorySelected !== 'all'
        ? initializeProducts.map(product => {
            if (product.price > oldMax && product.category === categorySelected) {
                oldMax = product.price
            }
        })
        : initializeProducts.map(product => {
            if (product.price > oldMax) {
                oldMax = product.price
            }
        })
    return oldMax
}