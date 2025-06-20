"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import EachUtils from "@/utils/EachUtils";
import MovieCard from "../fragments/card/MovieCard";
import useGetPopulerMovies from "@/features/movie/get/useGetPopularMovie";
import useGetTrendingMovies from "@/features/movie/get/useGetTrendingMovie";
import MovieCardLoading from "../fragments/isLoadingComponent/MovieCardLoading";
import DisplayPopularMovies from "../fragments/homeFragments/DisplayPopularMovies";
import Link from "next/link";
import TrendingMovies from "../fragments/homeFragments/TrendingMovie";
import TopRatedTVSeriesHome from "../fragments/homeFragments/TopRatedTvSeries";
import HomeHeading from "../elements/h1/HomeHeading";

const HomeLayout = () => {
  const [isMovie, setIsMovie] = useState(true);

  console.log(isMovie);

  return (
    <section className="">
      <DisplayPopularMovies />

      <div className=" flex flex-col  mx-auto mt-3 p-2 gap-4 pl-4">
        <div className=" flex flex-col gap-3 ">
          <div className=" flex flex-row gap-3 items-center">
            <HomeHeading text={"Trending"} />
            <div className="flex flex-row border border-slate-900 rounded-full h-fit">
              <button
                type="button"
                className={` px-3 py-1 ${
                  isMovie ? "bg-slate-900" : ""
                } text-slate-50 rounded-full`}
                onClick={() => setIsMovie(true)}
              >
                Movies
              </button>
              <div
                className={`hover:cursor-pointer hover:bg-slate-900 hover:text-slate-50 px-3 py-1 text-slate-900 font-bold rounded-full ${
                  !isMovie ? "bg-slate-900 text-slate-50" : ""
                } `}
              >
                <Link href={`/tv-show`}>TV Show</Link>
              </div>
            </div>
          </div>
          <div className=" pl-4   mt-3">
            <TrendingMovies />
          </div>
        </div>

        <TopRatedTVSeriesHome />
      </div>
    </section>
  );
};

export default HomeLayout;
