"use client";
import useGetTrendingMovies from "@/features/movie/get/useGetTrendingMovie";
import EachUtils from "@/utils/EachUtils";
import { useEffect } from "react";
import MovieCardLoading from "../isLoadingComponent/MovieCardLoading";
import MovieCard from "../card/MovieCard";
import useGetMovie from "@/features/movie/get/useGetMovie";

const TrendingMovies = () => {
  const { movie, fetchMovies, isLoading } = useGetTrendingMovies();
  const cardArrayLoading = Array(12).fill(null);
  const { data: movie2, fetchData } = useGetMovie();

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  return (
    <div className="">
      <div className="scrollbar-none flex flex-row gap-3 w-[100%] overflow-x-scroll  mt-3">
        {!isLoading ? (
          <EachUtils
            of={movie?.data?.results}
            render={(item, i) => <MovieCard key={item.id} movie={item} />}
          />
        ) : (
          <EachUtils
            of={cardArrayLoading}
            render={(item, i) => <MovieCardLoading key={i} />}
          />
        )}
      </div>
    </div>
  );
};

export default TrendingMovies;
