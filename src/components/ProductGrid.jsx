import PropTypes from "prop-types";
import { ProductDetail } from "./ProductDetail.jsx";

export const ProductGrid = ({ products, deleteData, setproductSeleted }) => {

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>LASTNAME</th>
                        <th>AGE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                            <ProductDetail
                                product={product}
                                key={product.id}
                                deleteData={deleteData}
                                setproductSeleted={setproductSeleted}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired
};
