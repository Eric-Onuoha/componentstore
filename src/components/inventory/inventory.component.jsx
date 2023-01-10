import React, {useState, useContext} from "react";
import { InventoryContext, addItem } from "./inventory.context";

const Inventory = () => {

    const {item, addItem} = useContext(InventoryContext);

    const defaultFormFields = {
        formItem: ""
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {formItem} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
        addItem(formItem);
    }

    return (
        <div>
            <h1>Inventory</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="">Add Item to Inventory</label>
                <br />
                <input name="formItem" onChange={handleChange} type="text" value={formItem} />
                <button type="submit">Add Item</button>
            </form>

            <div>
                <h2>Inventory Record</h2>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>Cat</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>{item}</td>
                    <td>1</td>
                </tr>
            </div>
        </div>
    )
}

export default Inventory;