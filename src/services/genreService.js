export const genres = [
    { _id: "615", name: "Action" },
    { _id: "617", name: "Comedy" },
    { _id: "619", name: "Thriller" }
  ];
  
  export function getGenres() {
    return genres.filter(g => g);
  }
  