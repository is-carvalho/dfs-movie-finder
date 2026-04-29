import "./App.css";
import Header from "./components/Header";
import MovieContextProvider from "./context/MovieContext";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import Item from "./components/Item";
import NotFound from "./components/NotFound";
import Search from "./components/Search";

function SearchWrapper() {
  const { searchInput } = useParams();

  return <Search searchTerm={searchInput} />;
}

function Headerwrapper() {
  const navigate = useNavigate();

  function handleSubmit(e, searchInput) {
    e.preventDefault();
    e.currentTarget.reset();
    navigate(`/search/${searchInput}`);
  }

  return <Header handleSubmit={handleSubmit} />;
}

function App() {
  return (
    <MovieContextProvider>
      <BrowserRouter basename={"/dfs-movie-finder"}>
        <div>
          <Headerwrapper />
          <Routes>
            <Route
              path="/dfs-movie-finder"
              element={<Navigate to="animation" replace />}
            />
            <Route
              path="/animation"
              element={<Item searchTerm="The-Incredibles" />}
            />
            <Route path="/scifi" element={<Item searchTerm="Interstellar" />} />
            <Route
              path="/fantasy"
              element={<Item searchTerm="harry-potter" />}
            />
            <Route path="/aventure" element={<Item searchTerm="avatar" />} />

            {/* Rota dinamica */}
            <Route path="/search/:searchInput" element={<SearchWrapper />} />

            {/* Not found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MovieContextProvider>
  );
}

export default App;
