import { Movie } from '../models';

const API_KEY = 'YOUR_API_KEY';
const BASE_API_URL = 'https://api.themoviedb.org/3';
const BASE_POSTER_IMAGE_URL = 'https://image.tmdb.org/t/p/original';
const BASE_GRID_IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

const ApiService = {
  async getMovies() : Promise<Array<Movie>> {
    return fetch(`${BASE_API_URL}/trending/all/day?language=pt-BR&api_key=${API_KEY}`)
      .then((response) => response.json().then((info) => info.results.map((item: Movie) => item)));
  },
  buildMoviePosterUrl(movieUrl: string) : string {
    return `${BASE_POSTER_IMAGE_URL}/${movieUrl}`;
  },
  buildMovieGridUrl(movieUrl: string) : string {
    return `${BASE_GRID_IMAGE_URL}/${movieUrl}`;
  },
};

export default ApiService;
