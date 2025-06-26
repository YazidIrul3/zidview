"use client";
import useGetTrendingMovies from "@/features/movie/get/useGetTrendingMovie";
import EachUtils from "@/utils/EachUtils";
import { useEffect, useState } from "react";
import useGetTrendingTVSeries from "@/features/tv/useGetTrendingTVSeries";
import VerticalCardLoading from "../isLoadingComponent/VerticalCardLoading";
import VerticalMovieCard from "../card/VerticalMovieCard";
import VerticalTVCard from "../card/VerticalTVCard";
import withIsMovie from "@/utils/withIsMovie";
import Heading1 from "@/components/elements/heading/Heading1";

const TrendingHome = (props) => {
  const { movie, fetchMovies, isLoading } = useGetTrendingMovies();
  const cardArrayLoading = Array(20).fill(null);
  const { data: tv, fetchTV, isLoading: isLoading2 } = useGetTrendingTVSeries();
  // const [isMovie, setIsMovie] = useState(true);

  const { isMovie, handleIsMovieTrue, handleIsMovieFalse } = props;

  useEffect(() => {
    if (isMovie) fetchMovies();

    fetchTV();
  }, [isMovie]);
  return (
    <div className=" flex flex-col gap-3 ">
      <div className=" flex flex-row gap-3 items-center">
        <Heading1 text={"Trending"} />
        <div className="flex flex-row border border-slate-900 rounded-full h-fit font-bold">
          <button
            type="button"
            className={` px-3 py-1 ${
              isMovie ? "bg-slate-900 text-slate-50" : "text-slate-900 "
            } text-slate-50 rounded-full`}
            onClick={handleIsMovieTrue}
          >
            Movies
          </button>
          <button
            onClick={handleIsMovieFalse}
            className={` font-bold rounded-full px-3 py-1 ${
              !isMovie
                ? "bg-slate-900 ease-in-out duration-100 text-slate-50 "
                : " text-slate-900"
            } `}
          >
            TV
          </button>
        </div>
      </div>
      <div className=" pl-3 ">
        <div className="">
          {isMovie ? (
            <div className="scrollbar-none flex flex-row gap-3 w-[100%] overflow-x-scroll  mt-3">
              {!isLoading ? (
                <EachUtils
                  of={movie?.data?.results}
                  render={(item, i) => (
                    <VerticalMovieCard key={item.id} data={item} />
                  )}
                />
              ) : (
                <EachUtils
                  of={cardArrayLoading}
                  render={(item, i) => <VerticalCardLoading key={i} />}
                />
              )}
            </div>
          ) : (
            <div className="scrollbar-none flex flex-row gap-3 w-[100%] overflow-x-scroll  mt-3">
              {!isLoading2 ? (
                <EachUtils
                  of={tv?.data?.results}
                  render={(item, i) => <VerticalTVCard key={i} data={item} />}
                />
              ) : (
                <EachUtils
                  of={cardArrayLoading}
                  render={(item, i) => <VerticalCardLoading key={i} />}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withIsMovie(TrendingHome);
