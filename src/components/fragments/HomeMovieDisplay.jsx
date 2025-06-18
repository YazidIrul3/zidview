import Image from "next/image";

const HomeMovieDisplay = ({ movie }) => {
  return (
    <div className=" w-full h-full relative ease-in-out duration-100">
      <Image
        className=" w-full min-h-full h-[400px]"
        src={
          `${"https://image.tmdb.org/t/p/w500"}${movie?.backdrop_path}` || ""
        }
        width={100}
        height={100}
        alt="Img Movie Display"
      />
      <div className="absolute bg-slate-900  opacity-50 top-0 left-0 w-full h-full"></div>

      <div className="absolute bottom-0 left-0 z-50 w-full h-full translate-y-1/2 flex flex-col gap-2">
        <h1 className=" text-black font-bold text-xl ml-5 bg-red-500 w-fit flex justify-center items-center px-4 py-1">
          Populer
        </h1>
        <div>
          <h1 className=" text-white font-bold text-xl ml-5">{movie?.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeMovieDisplay;
