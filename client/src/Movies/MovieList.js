import React from 'react';
import MovieCard from './MovieCard';
import { Link, useRouteMatch } from 'react-router-dom';

export default function MovieList(props) {
  const { movie } = props;
  console.log(props)
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { url } = useRouteMatch();

  return (
    <div className='movie-card'>
      <Link to={`/movies/${props.movie.id}`}>
        <MovieCard movie={props.movie} />
      </Link>
    </div>
  );
}
