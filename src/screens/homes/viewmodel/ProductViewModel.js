import { useState } from "react";
import { fetchProducts } from "../../../data/gateway/RestApiGateway";

export function useProductViewModel() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetchProducts()
            .then(data => setProducts(data))
            .catch(error => console.error('Error setting products:', error));
    }

    return {
        products,
        getProducts,
    };
}