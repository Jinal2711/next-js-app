import React, { Component } from "react";
import Rating from "./Rating";
const MovieCard = props => {
  const { movie } = props;
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
      {/* Article */}
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </a>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-white" href="#">
              {movie.title.substring(0, 20)}
            </a>
          </h1>
          <p className="text-white text-sm">{movie.vote_average}</p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <Rating rate={movie.vote_average} />

          <a
            className="no-underline text-grey-darker hover:text-red-dark"
            href="#"
          >
            <span className="hidden">Like</span>
            <i className="fa fa-heart" />
          </a>
        </footer>
      </article>
    </div>
  );
};

export default MovieCard;
