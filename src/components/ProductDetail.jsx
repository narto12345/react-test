import PropTypes from "prop-types";

export const ProductDetail = ({ product }) => {

    return (
        <>
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.lastname}</td>
                <td>{product.age}</td>
            </tr>
        </>
    );
};

ProductDetail.propTypes = {
    product: PropTypes.object.isRequired
};
