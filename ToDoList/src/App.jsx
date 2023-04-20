import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CompletedMovies from "./Pages/CompletedMovies";

function App() {

  return (
    <div className="wrapper">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/completedmovies" element={<CompletedMovies />} />
</Routes>
    </div>
  )
}

export default App
