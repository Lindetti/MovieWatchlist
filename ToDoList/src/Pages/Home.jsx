import "./Home.css";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Home = () => {
const [movies, setMovies] = useState([]);
const [movieInput, setMovieInput] = useState("");
const [completedMovies, setCompletedMovies] = useState([]);

const handleOnChange = (event) => {
    setMovieInput(event.target.value);
}

const addItem = (addNewMovie) => {
const updatedMovies = [...movies, addNewMovie];
setMovies(updatedMovies);
localStorage.setItem('movies', JSON.stringify(updatedMovies));
} 

const deleteItem = (index) => {
const updatedItems = [...movies];
updatedItems.splice(index, 1);
setMovies(updatedItems);
localStorage.setItem('movies', JSON.stringify(updatedItems));
}

const handleComplete = (index) => {
    const completedMovie = movies[index];
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
    const storedCompletedMovies = localStorage.getItem("completedMovies");
    let updatedCompletedMovies = [];
    if (storedCompletedMovies) {
      updatedCompletedMovies = JSON.parse(storedCompletedMovies);
    }
    updatedCompletedMovies.push(completedMovie);
    setCompletedMovies(updatedCompletedMovies);
    localStorage.setItem(
      "completedMovies",
      JSON.stringify(updatedCompletedMovies)
    );
    localStorage.setItem("movies", JSON.stringify(updatedMovies)); // add this line to remove completed movie from local storage
  };

const handlesubmit = (event) => {
    event.preventDefault();
    addItem(movieInput);
     setMovieInput("");
 }

    useEffect(() => {
        const storedMovies = localStorage.getItem("movies");
        if (storedMovies) {
          setMovies(JSON.parse(storedMovies));
        }

        const storedCompletedMovies = localStorage.getItem("completedMovies");
        if (storedCompletedMovies) {
          setCompletedMovies(JSON.parse(storedCompletedMovies));
        }
      }, []);

    return (
        <div className="home-wrapper">
            <div className="home-header">
            <h1>My Movies</h1>
            </div>
           <div className="nextPage">
            <Link to="/completedmovies">My watched Movies</Link>
           </div>
           <div className="formDiv">
           <form onSubmit={handlesubmit}>
             <label>Add Movies to your watchlist</label>
             <div className="inputAndBtn">
            <input 
            type="text" 
            placeholder="I will watch.."
            onChange={handleOnChange}
            value={movieInput}
            />
            <button disabled={!movieInput} className="addMovie" type="submit">Add</button>
            </div>
            </form>
            {movies.length === 0 ? (
       <div className="info">
         <h2>No movies in your watchlist yet</h2>
       </div>
      ) : (
        <div className="addedMovies">
          <p>My Watchlist: </p>
          {movies.map((movie, index) => {
            return (
              <div className="newMovie" key={index}>
                <p> {movie}</p>
                <div className="buttons">
                <button className="home-completed" onClick={() => handleComplete(index)}>
                      Watched
                    </button>
                  <button className="home-delete" onClick={() => deleteItem(index)}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      )}
           </div>
        </div>
    )
}
export default Home;