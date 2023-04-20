import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./CompletedMovies.css";

const CompletedMovies = () => {
  const [completedMovies, setCompletedMovies] = useState([]);

  useEffect(() => {
    const storedCompletedMovies = localStorage.getItem("completedMovies");
    if (storedCompletedMovies) {
      setCompletedMovies(JSON.parse(storedCompletedMovies));
    }
  }, []);

  const handleDelete = (index) => {
    const updatedMovies = [...completedMovies];
    updatedMovies.splice(index, 1);
    setCompletedMovies(updatedMovies);
    localStorage.setItem("completedMovies", JSON.stringify(updatedMovies));
  };

  return (
    <div className="completedMovies-wrapper">
      <div className="completedMovies-header">
      <h1>My Watched Movies</h1>
      </div>
      <div className="goBack">
     <Link to="/">Back</Link>
     </div>
      {completedMovies.length === 0 ? (
       <div className="noMovies">
         <h2>You have not watched any movies yet!</h2>
       </div>
      ) : (
        <div className="completedMovies-list"> 
        <p>Watched movies: </p>
          {completedMovies.map((movie, index) => (
            <div className="watchedMovies" key={index}>
             <p> {movie} </p>
              <button className="deleteCompleted" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompletedMovies;