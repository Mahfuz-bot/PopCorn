/* eslint-disable react/prop-types */
export default function UserCard({ watched }) {
  const length = watched.length;
  let time = watched
    .filter((movie) => !isNaN(movie.runtime))
    .map((movie) => movie.runtime)
    .reduce((acc, c) => acc + c, 0);
  let hr, min, chkTime;

  if (time > 60) {
    hr = time / 60;
    min = time % 60;
    chkTime =
      time < 60 ? time : parseInt(hr) + " hr " + min.toFixed(0) + " min";
  }

  // console.log(min);

  return (
    <section className="flex items-center gap-6 px-4 py-2 mb-4 bg-slate-600 rounded-xl">
      <img src="logo512.png" alt="" className="object-cover w-1/4 h-auto" />
      <div>
        <h3 className="text-2xl ">User Name</h3>
        <div className="flex items-center gap-3 mt-2 ">
          <p>🍸&nbsp;{length}</p>
          <p>
            ⌛&nbsp;
            {time < 60 ? time + " min" : chkTime}
          </p>
        </div>
      </div>
    </section>
  );
}
