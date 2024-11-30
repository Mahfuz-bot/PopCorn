import { useEffect, useState } from "react";

// const API_KEY = "9504a4a4";
const MOVIE_URL = import.meta.env.VITE_MOVIE_URL || "http://www.omdbapi.com/";
const MOVIES_URL = import.meta.env.VITE_MOVIES_URL || "http://www.omdbapi.com/";

export function useMovieDetails(id) {
  const [movie, setMovie] = useState([]);
  const [isLoadingd, setIsLoadingd] = useState(false);
  const [errord, setErrord] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoadingd(true);
          setErrord("");
          const url = new URL(MOVIE_URL);
          url.searchParams.append("apikey", API_KEY);
          url.searchParams.append("i", id);

          const res = await fetch(url.toString(), {
            signal: controller.signal,
          });

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");
          // console.log(data);
          // if value includes title === data.title then setMovie along with wathced flag
          setMovie(data);
          setErrord("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setErrord(err.message);
          }
        } finally {
          setIsLoadingd(false);
        }
      }

      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [id]
  );
  return { movie, isLoadingd, errord };
}
export function useMovie(query, type = null) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      //   const res;
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const url = new URL(MOVIES_URL);
          url.searchParams.append("apikey", API_KEY);
          url.searchParams.append("s", query);

          if (type === "movie") {
            url.searchParams.append("type", type);
          }
          if (type === "series") {
            url.searchParams.append("type", type);
          }
          const res = await fetch(url.toString(), {
            signal: controller.signal,
          });

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query, type]
  );
  return { movies, isLoading, error };
}
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
