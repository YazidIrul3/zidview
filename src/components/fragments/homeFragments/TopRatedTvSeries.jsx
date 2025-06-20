import HomeHeading from "@/components/elements/h1/HomeHeading";
import useGetTopRatedTVSeries from "@/features/tv/useGetTopRatedTVSeries'";
import EachUtils from "@/utils/EachUtils";
import { useEffect } from "react";
import TopRatedTVSeriesCard from "../card/TopRatedTVSeriesCard";
import VerticalCardLoading from "../isLoadingComponent/VerticalCardLoading";

const TopRatedTVSeriesHome = () => {
  const cardArrayLoading = Array(20).fill(null);
  const { data, fetchTV, isLoading } = useGetTopRatedTVSeries();

  useEffect(() => {
    fetchTV();
  }, []);
  return (
    <div className=" mt-3">
      <div className=" flex flex-row items-center gap-3">
        <HomeHeading text={"Top Rated TV Series"} />

        <div></div>
      </div>

      <div className=" scrollbar-none flex flex-row gap-3 w-[100%] overflow-x-scroll overflow-y-hidden mt-3 my-3">
        {isLoading ? (
          <EachUtils
            of={cardArrayLoading}
            render={(item, i) => <VerticalCardLoading key={i} />}
          />
        ) : (
          <EachUtils
            of={data?.data?.results}
            render={(item, i) => (
              <TopRatedTVSeriesCard key={item.id} data={item} no={i + 1} />
            )}
          />
        )}
      </div>
    </div>
  );
};

export default TopRatedTVSeriesHome;
