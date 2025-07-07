"use client";

import useGet from "@/features/movie/useGet";
import Image from "next/image";
import { useEffect, useState } from "react";

const DisplayPopularMovies = ({ data }) => {
  const {
    data: movie,
    fetchData: fetchMovies,
    isLoading,
  } = useGet("/movie/now_playing?language=en-US&page=1");

  const [currentDisplayMovie, setCurrentDisplayMovie] = useState(0);
  const currentMovieID = movie?.data?.results[currentDisplayMovie]?.id;

  const handleCurrentDisplayMovie = () => {
    const intervalid = setInterval(() => {
      if (currentDisplayMovie >= 4) {
        setCurrentDisplayMovie(0);
      } else {
        setCurrentDisplayMovie(() => currentDisplayMovie + 1);
      }
    }, 15000);

    return () => clearInterval(intervalid);
  };
  useEffect(() => {
    fetchMovies();
    handleCurrentDisplayMovie();
  }, [currentDisplayMovie]);

  return (
    <div>
      {!isLoading ? (
        <div className=" w-full h-full relative ease-in-out duration-100">
          <Image
            className=" w-full max-h-[500px]"
            src={
              `${"https://image.tmdb.org/t/p/w500"}${
                movie?.data?.results[0]?.backdrop_path
              }` || ""
            }
            width={100}
            height={100}
            alt="Img Movie Display"
          />
          <div className="absolute bg-slate-900  opacity-50 top-0 left-0 w-full h-full"></div>

          <div className="absolute bottom-20 left-3 z-20 w-full h-full translate-y-1/2 flex flex-col gap-2">
            <h1 className=" text-black font-bold sm:text-xl text-sm ml-5 bg-red-500 w-fit flex justify-center items-center px-4 py-1">
              Now Playing
            </h1>
            <div className="ml-5 flex flex-col gap-2 mt-1">
              <h1 className=" text-white font-bold sm:text-xl text-lg ">
                {movie?.data?.results[0]?.title}
              </h1>
              <p className=" text-slate-50 font-light lg:w-9/12 w-11/12 text-justify sm:text-sm text-xs">
                {movie?.data?.results[0]?.overview}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className=" w-full h-[400px] bg-slate-900 animate-pulse"></div>
      )}
    </div>
  );
};

export default DisplayPopularMovies;
