import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesData } from "../Actions";

const MovieList = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(store => store.MovieReducer.MovieList);
  useEffect(() => {
    dispatch(fetchMoviesData());
  }, []);
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex content-center flex-wrap -mx-1 lg:-mx-4">
        {movieList && movieList?.map(m => <MovieCard movie={m} key={m.id} />)}
      </div>
    </div>
  );
};
export default MovieList;
