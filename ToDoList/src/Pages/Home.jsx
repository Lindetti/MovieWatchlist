import "./Home.css";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Modal from "../Components/Modal";
import Completed from "./Completed";

const Home = () => {
const [isModalOpen, setIsModalOpen] = useState(false);
const [items, setItems] = useState([]);

const showModalFunc = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addItem = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };
const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
}

useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

    return (
        <div className="home-wrapper">
        <div className="nextPage">
        <Link className="completedBtn" to="/completedtask">My Completed Tasks</Link>
        </div>
        <div className="content">
        <div className="addedItems">
        {items.map((item, index) => {
            return (
                <div className="addedItem"  key={index}>
                <p>{index + 1}: {item}</p>
                <div className="buttons">
                <button  >Completed</button>
               <button onClick={() => deleteItem(index)}>Delete</button>
                </div>
                </div>
            )
        })}
        </div>
        
        <div className="addToList">
            <button className="plus" onClick={showModalFunc}>+</button>
        </div>
        </div>
        <Modal showModal={isModalOpen} closeModal={closeModal} addItem={addItem}/>
        </div>
    )
}

export default Home;