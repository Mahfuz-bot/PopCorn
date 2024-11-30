/* eslint-disable react/prop-types */
import WatchedMovie from "./WatchedMovie";

export default function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul
      className={`py-4 ${
        watched.length > 1 ? "overflow-y-scroll cs-scroll" : ""
      } max-h-[25rem]`}
    >
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}
