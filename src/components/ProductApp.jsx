import { useState, useEffect } from "react";

import { listProducts, createProduct, deleteProduct } from "../services/ProductService.js";
import { ProductGrid } from "./ProductGrid.jsx";
import { ProductForm } from "./ProductForm.jsx";

export const ProductApp = () => {

    useEffect(() => {
        setProducts(listProducts());
    }, []);

    const [products, setProducts] = useState([]);

    const updateData = (product) => {
        createProduct(product);
        setProducts(listProducts());
    };

    const deleteData = (productId) => {
        deleteProduct(productId);
        setProducts(listProducts());
    };

    return (
        <>
            <div>
                <h1>Hello world React</h1>
                <div>
                    <div>
                        <ProductGrid products={products} deleteData={deleteData} />
                    </div>
                    <div>
                        <ProductForm updateData={updateData} />
                    </div>
                </div>
            </div>
        </>
    );
}
