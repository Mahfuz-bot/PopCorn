/* eslint-disable react/prop-types */
export default function MovieCard(props) {
  const {
    movie: { Title: title, Poster: poster, Year: year, imdbID },

    handleMovieSelect,
  } = props;

  return (
    <section
      className="flex items-center gap-6 px-4 py-2 mb-4 cursor-pointer bg-slate-950 rounded-xl"
      onClick={() => handleMovieSelect(imdbID)}
    >
      <img
        src={poster}
        alt={title}
        className="object-cover w-1/5 h-auto rounded-xl"
      />
      <div>
        <h3 className="text-2xl ">{title}</h3>
        <div className="flex items-center mt-2 ">
          <span className="mr-4">📅&nbsp;{year}</span>
        </div>
      </div>
    </section>
  );
}
