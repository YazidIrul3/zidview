"use client";

import useMovieSearchGenres from "@/hooks/useMovieSearchGenres";
import useGetFilterMovie from "@/features/movie/get/useGetFilterMovie";
import { useEffect } from "react";
import EachUtils from "@/utils/EachUtils";
import useSorting from "@/hooks/useSorting";
import VerticalCardLoading from "@/components/fragments/isLoadingComponent/VerticalCardLoading";
import TVEpisodeCardLoading from "@/components/fragments/isLoadingComponent/TVEpisodeCard";
import TVFilterSIdebarLayout from "./TVFilterSidebarLayout";
import TVFilterVerticalCard from "@/components/fragments/card/TVFilterVerticalCard";
import SearchTVShowHorizontalCard from "@/components/fragments/card/SearchTVShowHorizontalCard";
import useGetFilterTV from "@/features/tv/useGetFilterTV";

const TVShowsLayout = () => {
  const { genres } = useMovieSearchGenres();
  const { data: filterTV, fetchData, isLoading } = useGetFilterTV();
  const { sorting } = useSorting();
  const arrayCardLoading = Array(20).fill(null);

  useEffect(() => {
    fetchData(sorting || "title.asc", genres.join(",") || "");
  }, [sorting || genres.join(",")]);
  return (
    <TVFilterSIdebarLayout>
      <div className="hidden lg:grid xl:grid-cols-5 grid-cols-4  gap-3">
        {isLoading ? (
          <EachUtils
            of={arrayCardLoading}
            render={(item, i) => <VerticalCardLoading key={i} />}
          />
        ) : (
          <EachUtils
            of={filterTV?.data?.results}
            render={(item, i) => <TVFilterVerticalCard key={i} data={item} />}
            errorText={" TV's Not Found"}
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
            of={filterTV?.data?.results}
            render={(item, i) => (
              <SearchTVShowHorizontalCard key={i} data={item} />
            )}
            errorText={" tv's Not Found"}
          />
        )}
      </div>
    </TVFilterSIdebarLayout>
  );
};

export default TVShowsLayout;
