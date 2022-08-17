import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, edit }) => {
  return (
    <div className="movie-list">
      {movies.map((el) => (
        <MovieCard movie={el} key={el.id} edit={edit} />
      ))}
    </div>
  );
};

export default MovieList;
