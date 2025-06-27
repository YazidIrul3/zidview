"use client";

import { useSearchParams } from "next/navigation";
import SearchSidebarLayout from "./SearchSidebarLayout";
import useGetSearchMovies from "@/features/movie/get/useGetSearchMovie";
import useGetSearchTV from "@/features/tv/useGetSearchTV";
import { useEffect } from "react";
import EachUtils from "@/utils/EachUtils";
import SearchTVShowHorizontalCard from "../fragments/card/SearchTVShowHorizontalCard";
import SearchHorizontalCardLoading from "../fragments/isLoadingComponent/SearchHorizontalCardLoading";

const SearchTVLayout = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const {
    data: movie,
    fetchData: fetchMovie,
    isLoading: isLoadingMovie,
  } = useGetSearchMovies();
  const {
    data: tv,
    fetchData: fetchTVShows,
    isLoading: isLoadingTVShows,
  } = useGetSearchTV();
  const arrayCardLoading = Array(20).fill(null);

  useEffect(() => {
    fetchMovie(query);
    fetchTVShows(query);
  }, [query]);
  return (
    <SearchSidebarLayout
      moviesLength={movie?.data?.total_results}
      tvShowsLength={tv?.data?.total_results}
    >
      <section className=" flex flex-col gap-3 max-h-screen h-screen overflow-y-scroll scrollbar-none">
        {isLoadingTVShows ? (
          <EachUtils
            of={arrayCardLoading}
            render={(item, i) => <SearchHorizontalCardLoading key={i} />}
          />
        ) : (
          <EachUtils
            of={tv?.data?.results}
            errorText={"Search tv show's Data not found"}
            render={(item, i) => (
              <SearchTVShowHorizontalCard key={i} data={item} />
            )}
          />
        )}
      </section>
    </SearchSidebarLayout>
  );
};

export default SearchTVLayout;
