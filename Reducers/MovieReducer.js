import { FETCH_PENDING, FETCH_SUCCESS, FETCH_ERROR } from "../Constant";

const initialState = {
  isLoading: false,
  MovieList: [],
  error: false
};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        MovieList: action.payload
      };
    case FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};
export default movieListReducer;
