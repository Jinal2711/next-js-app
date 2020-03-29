import { FETCH_PENDING, FETCH_SUCCESS, FETCH_ERROR } from "../Constant";
import MovieListApi from "../api/MovieListApi";

export const pendingState = () => {
  return {
    type: FETCH_PENDING
  };
};
export const successState = data => {
  return {
    type: FETCH_SUCCESS,
    payload: data
  };
};
export const errorState = error => {
  return {
    type: FETCH_ERROR,
    payload: error
  };
};

export const fetchMoviesData = () => async dispatch => {
  dispatch(pendingState());
  try {
    const movieListApi = new MovieListApi();
    const moviesData = await movieListApi.getMovieData();
    dispatch(successState(moviesData.data.results));
  } catch (err) {
    dispatch(errorState(err));
  }
};
