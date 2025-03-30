import { useState, useEffect } from "react";

import { listProducts, createProduct, deleteProduct } from "../services/ProductService.js";
import { ProductGrid } from "./ProductGrid.jsx";
import { ProductForm } from "./ProductForm.jsx";

export const ProductApp = () => {

    useEffect(() => {
        setProducts(listProducts());
    }, []);

    const [products, setProducts] = useState([]);

    const [productSeleted, setproductSeleted] = useState(
        {
            id: "",
            name: "",
            lastname: "",
            age: "",
        }
    );

    const updateData = (product) => {
        createProduct(product);
        setProducts(listProducts());
    };

    const deleteData = (productId) => {
        deleteProduct(productId);
        setProducts(listProducts());
    };

    const selectProduct = (product) => {
        console.log(product);
        setproductSeleted({... product});
    };

    return (
        <>
            <div>
                <h1>Hello world React</h1>
                <div>
                    <div>
                        <ProductGrid products={products} deleteData={deleteData} setproductSeleted={selectProduct}/>
                    </div>
                    <div>
                        <ProductForm updateData={updateData} productSeleted={productSeleted} />
                    </div>
                </div>
            </div>
        </>
    );
}
