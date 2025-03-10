import { useState } from "react";

const initialDataForm = {
    name: "",
    lastname: "",
    age: ""
};

export const ProductForm = ({ updateData }) => {

    const [productForm, setProductForm] = useState(initialDataForm);

    const { name, lastname, age } = productForm;

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
                    style={{
                        marginBottom: "10px",
                        display: "block"
                    }}
                    name="name"
                    value={name}
                    onChange={(event) => setProductForm({
                        ...productForm,
                        name: event.target.value
                    })}
                />
                <input placeholder="Lastname"
                    type="text"
                    style={{
                        marginBottom: "10px",
                        display: "block"
                    }}
                    name="lastname"
                    value={lastname}
                    onChange={(event) => setProductForm({
                        ...productForm,
                        lastname: event.target.value
                    })}
                />
                <input placeholder="Age"
                    type="text"
                    style={{
                        marginBottom: "10px",
                        display: "block"
                    }}
                    name="age"
                    value={age}
                    onChange={(event) => setProductForm({
                        ...productForm,
                        age: event.target.value
                    })}
                />
                <button type="submit">Create</button>
            </form>
        </>
    );

};