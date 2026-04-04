import { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import Loader from "./Loader";
import Gallery from "./Gallery";

function Container({ searchTerm }) {
  const { movies, loading, runSearch } = useContext(MovieContext);
  console.log("Buscando: ", searchTerm);
  useEffect(() => {
    runSearch(searchTerm);
    console.log(movies);
  }, [searchTerm]);

  return <div>{loading ? <Loader /> : <Gallery data={movies} />}</div>;
}

export default Container;
