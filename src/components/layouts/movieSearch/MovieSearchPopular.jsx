"use client";

import useMovieSearchGenres from "@/hooks/useMovieSearchGenres";
import MovieSearchSIdebarLayout from "./MovieSearchSidebarLayout";
import useGetFilterMovie from "@/features/movie/get/useGetFilterMovie";
import { useEffect } from "react";
import EachUtils from "@/utils/EachUtils";
import MovieFilterVerticalCard from "@/components/fragments/card/MovieFilterVerticalCard";
import SearchMovieHorizontalCard from "@/components/fragments/card/SearchMovieHorizontalCard";

const MovieSearchPopularLayout = () => {
  const { genres } = useMovieSearchGenres();
  const { data: filterMovies, fetchData, isLoading } = useGetFilterMovie();

  console.log(filterMovies);

  useEffect(() => {
    fetchData("popularity.desc", genres);
  }, []);
  return (
    <MovieSearchSIdebarLayout>
      <div className="hidden lg:grid lg:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-3">
        <EachUtils
          of={filterMovies?.data?.results}
          render={(item, i) => <MovieFilterVerticalCard key={i} data={item} />}
          errorText={" Movie's Not Found"}
        />
      </div>

      <div className=" flex flex-col gap-3">
        <EachUtils
          of={filterMovies?.data?.results}
          render={(item, i) => (
            <SearchMovieHorizontalCard key={i} data={item} />
          )}
          errorText={" Movie's Not Found"}
        />
      </div>
    </MovieSearchSIdebarLayout>
  );
};

export default MovieSearchPopularLayout;
