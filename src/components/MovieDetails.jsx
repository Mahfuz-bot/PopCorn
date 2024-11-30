import { useEffect } from "react";

/* eslint-disable react/prop-types */
export default function MovieDetails({
  onBack,
  movie,
  onCloseMovie,
  onAddWatched,
  watched,
}) {
  const {
    Poster: poster,
    Actors: actors,
    Genre: genre,
    Plot: plot,
    Rated: rated,
    Runtime: runTime,
    Title: title,
    Type: type,
    Year: year,
    imdbRating,
    imdbID,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runTime.split(" ").at(0)),
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }
  const pass = watched.find((movie) => movie.title === title);
  // console.log(pass);

  useEffect(
    function () {
      document.title = "Movie | " + title;

      return () => {
        document.title = "PopCorn";
      };
    },
    [title]
  );

  return (
    <div className="relative h-full rounded-lg bg-slate-950 overflow-y-scroll cs-scroll">
      <div
        className="absolute text-2xl text-white  rounded-full cursor-pointer"
        onClick={onBack}
      >
        Back
      </div>
      <div
        className="absolute right-0 text-2xl text-white cursor-pointer font-bod"
        onClick={handleAdd}
      >
        {pass ? "Watched" : "✅"}
      </div>
      <section className="flex flex-col pt-12">
        <img
          src={poster}
          alt={title}
          className="self-center w-1/2 mb-4 h-1/3 rounded-xl"
        />
        <div className="px-4 py-6 mx-4 bg-slate-900 rounded-xl">
          <h3 className="text-xl lg:text:2xl">{title}</h3>
          <p>💁‍♂️ {actors}</p>
          <p>
            🧬 {genre}, {rated}, {type}
          </p>
          <p>📅 {year}</p>
          <p>⏳ {runTime}</p>
          <p>⭐ {imdbRating}</p>
        </div>
        <p className="p-6 text-lg bg-slate-950">{plot}</p>
      </section>
    </div>
  );
}
