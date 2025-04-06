import { useEffect, useState } from "react";

const initialDataForm = {
    name: "",
    lastname: "",
    age: ""
};

export const ProductForm = ({ updateData, productSeleted }) => {

    const [productForm, setProductForm] = useState(initialDataForm);

    const { name, lastname, age } = productForm;

    useEffect(() => {
        setProductForm(productSeleted)
    },
    [productSeleted]);

    return (
        <>
            <form onSubmit={
                (event) => {
                    event.preventDefault();

                    if (!name || !lastname || !age) {
                        alert("Todos los campos son obligatorios");
                        return;
                    }
                    updateData(productForm);
                    setProductForm(initialDataForm);
                }
            }>
                <input placeholder="Name"
                    type="text"
                    className="form-control my-3 w-75"
                    name="name"
                    value={name}
                    onChange={(event) => setProductForm({
                        ...productForm,
                        name: event.target.value
                    })}
                />
                <input placeholder="Lastname"
                    type="text"
                    className="form-control my-3 w-75"
                    name="lastname"
                    value={lastname}
                    onChange={(event) => setProductForm({
                        ...productForm,
                        lastname: event.target.value
                    })}
                />
                <input placeholder="Age"
                    type="text"
                    className="form-control my-3 w-75"
                    name="age"
                    value={age}
                    onChange={(event) => setProductForm({
                        ...productForm,
                        age: event.target.value
                    })}
                />
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </>
    );

};