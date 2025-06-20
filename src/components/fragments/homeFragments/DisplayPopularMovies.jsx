"use client";
import useGetPopulerMovies from "@/features/movie/get/useGetPopularMovie";
import Image from "next/image";
import { useEffect, useState } from "react";

const DisplayPopularMovies = () => {
  const { movie, fetchMovies, isLoading } = useGetPopulerMovies();
  const [currentDisplayMovie, setCurrentDisplayMovie] = useState(0);

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
    handleCurrentDisplayMovie();
  }, [currentDisplayMovie]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  return (
    <div>
      {!isLoading ? (
        <div className=" w-full h-full relative ease-in-out duration-100">
          <Image
            className=" w-full h-[400px] object-cover"
            src={
              `${"https://image.tmdb.org/t/p/w500"}${
                movie?.data?.results[currentDisplayMovie]?.backdrop_path
              }` || ""
            }
            width={100}
            height={100}
            alt="Img Movie Display"
          />
          <div className="absolute bg-slate-900  opacity-50 top-0 left-0 w-full h-full"></div>

          <div className="absolute bottom-0 left-0 z-20 w-full h-full translate-y-1/2 flex flex-col gap-2">
            <h1 className=" text-black font-bold text-xl ml-5 bg-red-500 w-fit flex justify-center items-center px-4 py-1">
              Populer
            </h1>
            <div>
              <h1 className=" text-white font-bold text-xl ml-5">
                {movie?.data?.results[currentDisplayMovie]?.title}
              </h1>
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
