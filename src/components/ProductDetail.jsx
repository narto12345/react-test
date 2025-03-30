import PropTypes from "prop-types";

export const ProductDetail = ({ product, deleteData }) => {

    return (
        <>
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.lastname}</td>
                <td>{product.age}</td>
                <th>
                    <button>UPDATE</button>
                    <button onClick={() => {
                        deleteData(product.id)
                    }}>DELETE</button>
                </th>
            </tr>
        </>
    );
};

ProductDetail.propTypes = {
    product: PropTypes.object.isRequired
};
