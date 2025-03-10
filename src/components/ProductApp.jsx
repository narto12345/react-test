import { useState, useEffect } from "react";

import { listProducts } from "../services/ProductService.js";
import { ProductGrid } from "./ProductGrid.jsx";

export const ProductApp = () => {

    useEffect(() => {
        setProducts(listProducts());
    }, []);

    const [products, setProducts] = useState([]);

    return (
        <>
            <h1>Hello world React</h1>
            <ProductGrid products={products}/>
        </>
    );
}
