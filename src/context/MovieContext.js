import { useState } from "react";
import axios from "axios";
import { apiKey } from "../api/Config";
import { createContext } from "react";
export const MovieContext = createContext();

function MovieContextProvider(props) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function runSearch(query) {
    try {
      console.log(query);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <MovieContext.Provider value={{ movies, loading, runSearch }}>
        {props.children}
      </MovieContext.Provider>
    </>
  );
}

export default MovieContextProvider;
