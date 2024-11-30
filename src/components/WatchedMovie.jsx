/* eslint-disable react/prop-types */
export default function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li className="relative flex items-center gap-4 mb-3 ">
      <img
        src={movie.poster}
        alt={`${movie.title} poster`}
        className="w-1/4 rounded-xl"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl">{movie.title}</h3>
        <div className="flex gap-4">
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>

          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
      </div>
      <button
        className="absolute px-4 py-2 bg-red-500 rounded-full right-0"
        onClick={() => onDeleteWatched(movie.imdbID)}
      >
        X
      </button>
    </li>
  );
}
