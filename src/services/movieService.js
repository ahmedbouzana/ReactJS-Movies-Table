import * as genresAPI from "./genreService";

const movies = [
  {
    _id: "1",
    title: "Terminator",
    genre: { _id: "615", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "2",
    title: "Die Hard",
    genre: { _id: "615", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    liked: false
  },
  {
    _id: "3",
    title: "Get Out",
    genre: { _id: "619", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    liked: true
  },
  {
    _id: "4",
    title: "Trip to Italy",
    genre: { _id: "617", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "5",
    title: "Airplane",
    genre: { _id: "617", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: true
  },
  {
    _id: "6",
    title: "Wedding Crashers",
    genre: { _id: "617", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "7",
    title: "Gone Girl",
    genre: { _id: "619", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    liked: true
  },
  {
    _id: "8",
    title: "The Sixth Sense",
    genre: { _id: "619", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "9",
    title: "The Avengers",
    genre: { _id: "615", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: true
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
