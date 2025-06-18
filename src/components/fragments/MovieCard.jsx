import Image from "next/image";

const MovieCard = ({ movie }) => {
  console.log(movie);

  return (
    <div className=" flex flex-col gap-3">
      <Image
        className=" min-w-[170px] h-[250px] rounded-2xl"
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt={movie.title}
        width={200}
        height={300}
      />

      <h1 className=" font-bold text-slate-900 text-lg">{movie.title}</h1>
      <h3>{movie.release_date}</h3>
    </div>
  );
};

export default MovieCard;
