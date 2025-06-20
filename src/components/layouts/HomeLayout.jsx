"use client";

import DisplayPopularMovies from "../fragments/homeFragments/DisplayPopularMovies";
import PopularHome from "../fragments/homeFragments/PopularHome";
import TopRatedTVSeriesHome from "../fragments/homeFragments/TopRatedTvSeries";
import TrendingHome from "../fragments/homeFragments/TrendingMovie";

const HomeLayout = () => {
  return (
    <section className="pb-3">
      <DisplayPopularMovies />

      <div className=" flex flex-col  mx-auto mt-3 p-2 gap-4 pl-4">
        <TopRatedTVSeriesHome />
        <TrendingHome />
        <PopularHome />
      </div>
    </section>
  );
};

export default HomeLayout;
