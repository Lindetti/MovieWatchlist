import "./Modal.css";
import {useState} from "react";

const Modal = ({showModal, closeModal, addItem}) => {

const showModalClassName = showModal ? "modal display-block" : "modal display-none";
const [itemInput , setItemInput] = useState("");

const handleInputOnChange = (event) => {
 setItemInput(event.target.value);
}

const handleSubmit = (event) => {
    event.preventDefault();
    addItem(itemInput);
    setItemInput("");
    closeModal();
}

    return (
        <div className={showModalClassName}>
            <div className="modal-content"> 
            <div className="closeDiv">
            <div className="close-icon">
              <span className="close-x" onClick={closeModal}>&times;</span>
            </div>
          </div>
          <div className="addItemText">
                <h1>Add new Item</h1>
            </div>
            <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="item" 
            value={itemInput}
            onChange={handleInputOnChange}
            />
            <button disabled={!itemInput} className="addItem" type="submit">Add item</button>
            </form>
            </div>
        </div>
    )
}

export default Modal;