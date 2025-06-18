"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import EachUtils from "@/utils/EachUtils";
import MovieCard from "../fragments/MovieCard";
import useGetPopulerMovies from "@/features/movie/get/useGetPopularMovie";
import useGetTrendingMovies from "@/features/movie/get/useGetTrendingMovie";

const HomeLayout = () => {
  return <div></div>;
};

const courosile = () => {
  const { movie, fetchMovies } = useGetPopulerMovies();
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
    <div className=" w-full h-full relative ease-in-out duration-100">
      <Image
        className=" w-full min-h-full h-[400px]"
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

const trending = () => {
  const { movie, fetchMovies } = useGetTrendingMovies();

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  return (
    <div className=" flex flex-col gap-3">
      <div className=" flex flex-row gap-3 items-center">
        <h1 className=" text-2xl font-bold text-slate-900">Trending</h1>
        <div className="flex flex-row border border-slate-900 rounded-full  h-fit">
          <button
            className=" px-3 py-1 bg-slate-900 text-slate-50 rounded-full"
            type="button"
          >
            Movies
          </button>
          <button
            className=" px-3 py-1 text-slate-900 font-bold rounded-full"
            type="button"
          >
            TV Show
          </button>
        </div>
      </div>

      <div className=" flex flex-row gap-3 ">
        <EachUtils
          of={movie?.data?.results}
          render={(item) => <MovieCard key={item.id} movie={item} />}
        />
      </div>
    </div>
  );
};
const main = () => {};

HomeLayout.courosile = courosile;
HomeLayout.trending = trending;

export default HomeLayout;
