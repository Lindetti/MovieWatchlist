import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Completed from "./Pages/Completed";

function App() {

  return (
    <div className="wrapper">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/completedtask" element={<Completed />} />
   </Routes>
    </div>
  )
}

export default App
