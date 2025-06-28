"use client";

import SearchSidebarLayout from "./SearchSidebarLayout";
import EachUtils from "@/utils/EachUtils";
import SearchTVShowHorizontalCard from "../fragments/card/SearchTVShowHorizontalCard";
import SearchHorizontalCardLoading from "../fragments/isLoadingComponent/SearchHorizontalCardLoading";
import withSearch from "@/utils/withSearch";

const SearchTVLayout = (props) => {
  const { movie, tv, arrayCardLoading, isLoadingTVShows, isLoadingMovie } =
    props;
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

export default withSearch(SearchTVLayout);
