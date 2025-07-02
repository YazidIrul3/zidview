"use client";

import PopularHome from "../fragments/homeFragments/PopularHome";
import PopularPersonHome from "../fragments/homeFragments/PopularPersonHome";
import TopRatedTVSeriesHome from "../fragments/homeFragments/TopRatedTvSeries";
import TrendingHome from "../fragments/homeFragments/TrendingMovie";
import DisplayPopularMovies from "../fragments/homeFragments/DisplayPopularMovies";

const HomeLayout = () => {
  return (
    <div className="pb-3">
      <DisplayPopularMovies />

      <div className=" flex flex-col  mx-auto mt-3 p-2 gap-4 pl-4">
        <TopRatedTVSeriesHome />
        <TrendingHome />
        <PopularHome />
        <PopularPersonHome />
      </div>
    </div>
  );
};

export default HomeLayout;
