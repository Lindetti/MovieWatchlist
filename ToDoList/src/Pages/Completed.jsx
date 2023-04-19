import "./Completed.css";
import {useState} from "react";
import { Link } from "react-router-dom";

const Completed = () => {
    return (
        <div className="completed-wrapper">
     <p>Competed</p>
            <Link className="backBtn" to="/">Back</Link>
        </div>
    )
}

export default Completed;