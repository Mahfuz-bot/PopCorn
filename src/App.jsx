import { useEffect, useState } from "react";
import {
  useMovie,
  useMovieDetails,
  useLocalStorageState,
} from "./hooks/customHooks";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import SearchBox from "./components/SearchBox";
import BodyCard from "./components/BodyCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieCard from "./components/MovieCard";
import UserCard from "./components/UserCard";
import WatchedMoviesList from "./components/WatchedMoviesList";
import MovieDetails from "./components/MovieDetails";

export default function App() {
  const [query, setQuery] = useState("");
  const [queryType, setQueryType] = useState("");
  const { movies, isLoading, error } = useMovie(query, queryType);
  const [movieId, setMovieId] = useState(null);
  const { movie, isLoadingd, errord } = useMovieDetails(movieId);
  const [back, setBack] = useState(true);
  const [watched, setWatched] = useLocalStorageState([], "watched");
  // const [selected, setSelected] = useState(false);

  function handleMovieSelect(id) {
    setMovieId(id);
    setBack(false);
  }
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  function handleCloseMovie() {
    setBack(true);
  }
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(function () {
    document.title = "PopCorn";
  }, []);

  return (
    <div className="text-xs">
      <Navbar>
        <Logo />
        <SearchBox
          queryType={queryType}
          onQueryType={setQueryType}
          query={query}
          onSearch={setQuery}
        />
        {/* <ItemCount /> */}
      </Navbar>
      <div className="flex items-center justify-center gap-4 mx-3">
        {/* List of Movies from api */}
        <BodyCard
          className={`${
            query.length > 0 ? "overflow-y-scroll cs-scroll" : ""
          } `}
        >
          {isLoading ? (
            <Loader />
          ) : error ? (
            <ErrorMessage message={"something went wrong"} />
          ) : query.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                handleMovieSelect={handleMovieSelect}
                key={movie.imdbID}
                movie={movie}
              />
            ))
          ) : (
            <div className="text-3xl ">Search name to see results...</div>
          )}
        </BodyCard>
        {/* selected movie  */}
        <BodyCard>
          {back ? (
            <>
              <UserCard watched={watched} />
              <div className="">
                <WatchedMoviesList
                  watched={watched}
                  onDeleteWatched={handleDeleteWatched}
                />
              </div>
            </>
          ) : isLoadingd ? (
            <Loader />
          ) : errord ? (
            <ErrorMessage message={`details not found`} />
          ) : (
            <MovieDetails
              onAddWatched={handleAddWatched}
              onCloseMovie={handleCloseMovie}
              onBack={handleCloseMovie}
              movie={movie}
              watched={watched}
            />
          )}
        </BodyCard>
      </div>
    </div>
  );
}
