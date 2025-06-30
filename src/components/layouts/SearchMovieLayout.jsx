"use client";

import SearchSidebarLayout from "./SearchSidebarLayout";
import EachUtils from "@/utils/EachUtils";
import SearchMovieHorizontalCard from "../fragments/card/SearchMovieHorizontalCard";
import SearchHorizontalCardLoading from "../fragments/isLoadingComponent/SearchHorizontalCardLoading";
import withSearch from "@/utils/withSearch";

const SearchMovieLayout = (props) => {
  const { movie, tv, arrayCardLoading, isLoadingTVShows, isLoadingMovie } =
    props;

  return (
    <SearchSidebarLayout
      moviesLength={movie?.data?.total_results | 0}
      tvShowsLength={tv?.data?.total_results | 0}
    >
      <section className=" flex flex-col gap-3 max-h-screen h-screen overflow-y-scroll scrollbar-none">
        {isLoadingMovie ? (
          <EachUtils
            of={arrayCardLoading}
            render={(item, i) => <SearchHorizontalCardLoading key={i} />}
          />
        ) : (
          <EachUtils
            of={movie?.data?.results}
            errorText={"Search movies's Data not found"}
            render={(item, i) => (
              <SearchMovieHorizontalCard key={i} data={item} />
            )}
          />
        )}
      </section>
    </SearchSidebarLayout>
  );
};

export default withSearch(SearchMovieLayout);
