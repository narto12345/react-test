import { useState, useEffect } from "react";

import { listProducts } from "../services/ProductService.js";
import { ProductGrid } from "./ProductGrid.jsx";
import { ProductForm } from "./ProductForm.jsx";

export const ProductApp = () => {

    useEffect(() => {
        setProducts(listProducts());
    }, []);

    const [products, setProducts] = useState([]);

    const updateData = (product) => {
        let lastId = products[products.length - 1].id;
        product.id = ++lastId;
        setProducts([...products, product]);
    };

    return (
        <>
            <div>
                <h1>Hello world React</h1>
                <div>
                    <div>
                        <ProductGrid products={products} />
                    </div>
                    <div>
                        <ProductForm updateData={updateData} />
                    </div>
                </div>
            </div>
        </>
    );
}
