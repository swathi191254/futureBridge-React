import React from "react";
import axios from "axios";
import "../App.css";

const MoviePage = () => {
  const [movie, setMovie] = React.useState([]);

  React.useEffect(() => {
    getMovie();
  }, []);

  const getMovie = () => {
    // here i have used local json server because,the heroku app is not working while deploying noje applicati on
    //
    axios.get("http://localhost:2345/movies").then((res) => {
      setMovie(res.data);
    });
  };
  return (
    <div>
      {movie.map((e) => (
        <div className="card">
          <div id="movie-div">
            <h2>Movie :{e.name}</h2>
            <p>Rating :{e.rating}</p>
            <p>Year :{e.date}</p>
          </div>
          <div id="movie-div">
            <h2>Movie :{e.name}</h2>
            <p>Rating :{e.rating}</p>
            <p>Year :{e.date}</p>
          </div>
          <div id="movie-div">
            <h2>Movie :{e.name}</h2>
            <p>Rating :{e.rating}</p>
            <p>Year :{e.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviePage;
