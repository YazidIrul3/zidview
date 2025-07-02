"use client";

import useMovieSearchGenres from "@/hooks/useMovieSearchGenres";
import MovieSearchSIdebarLayout from "./MovieSearchSidebarLayout";
import { useEffect, useState } from "react";
import EachUtils from "@/utils/EachUtils";
import MovieFilterVerticalCard from "@/components/fragments/card/MovieFilterVerticalCard";
import SearchMovieHorizontalCard from "@/components/fragments/card/SearchMovieHorizontalCard";
import useSorting from "@/hooks/useSorting";
import VerticalCardLoading from "@/components/fragments/isLoadingComponent/VerticalCardLoading";
import TVEpisodeCardLoading from "@/components/fragments/isLoadingComponent/TVEpisodeCard";
import useGet from "@/features/movie/useGet";

const MoviesLayout = () => {
  const { genres } = useMovieSearchGenres();
  const { sorting } = useSorting();
  const {
    data: filterMovies,
    fetchData,
    isLoading,
  } = useGet(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=${sorting}&with_genres=${
      (sorting || "title.asc", genres.join(",") || "")
    }`
  );
  const arrayCardLoading = Array(20).fill(null);

  useEffect(() => {
    fetchData();
  }, [sorting || genres.join(",")]);
  return (
    <MovieSearchSIdebarLayout>
      <div className="hidden lg:grid xl:grid-cols-5 grid-cols-4  gap-3">
        {isLoading ? (
          <EachUtils
            of={arrayCardLoading}
            render={(item, i) => <VerticalCardLoading key={i} />}
          />
        ) : (
          <EachUtils
            of={filterMovies?.data?.results}
            render={(item, i) => (
              <MovieFilterVerticalCard key={i} data={item} />
            )}
            errorText={" Movie's Not Found"}
          />
        )}
      </div>

      <div className=" lg:hidden flex flex-col gap-3">
        {isLoading ? (
          <EachUtils
            of={arrayCardLoading}
            render={(item, i) => <TVEpisodeCardLoading key={i} />}
          />
        ) : (
          <EachUtils
            of={filterMovies?.data?.results}
            render={(item, i) => (
              <SearchMovieHorizontalCard key={i} data={item} />
            )}
            errorText={" Movie's Not Found"}
          />
        )}
      </div>
    </MovieSearchSIdebarLayout>
  );
};

export default MoviesLayout;
