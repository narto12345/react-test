import PropTypes from "prop-types";
import { ProductDetail } from "./ProductDetail.jsx";

export const ProductGrid = ({ products, deleteData, setproductSeleted }) => {

    return (
        <>
            <table className="table table-hover table-striped">
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
                        products.length != 0 ? (
                            products.map((product) => (
                                <ProductDetail
                                    product={product}
                                    key={product.id}
                                    deleteData={deleteData}
                                    setproductSeleted={setproductSeleted}
                                />
                            ))
                        ) : (
                            <div>No hay registros</div>
                        )
                        
                    }
                </tbody>
            </table>
        </>
    );
};

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired
};
