import axios from "axios";

class MovieListApi {
  constructor() {
    this.HEADERS = { "Content-Type": "application/json" };
    this.$axios = axios.create({
      baseURL: "https://api.themoviedb.org/3",
      headers: this.HEADERS
    });
  }
  getMovieData() {
    return this.$axios.get(
      `/discover/movie?api_key=17ce301be4e248433e79e555fb543fb8`
    );
  }
}
export default MovieListApi;
