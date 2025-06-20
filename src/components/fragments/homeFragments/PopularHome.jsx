import HomeHeading from "@/components/elements/h1/HomeHeading";
import EachUtils from "@/utils/EachUtils";
import withIsMovie from "@/utils/withIsMovie";
import VerticalCardLoading from "../isLoadingComponent/VerticalCardLoading";
import VerticalTVCard from "../card/VerticalTVCard";
import { useEffect } from "react";
import VerticalMovieCard from "../card/VerticalMovie]Card";
import useGetLatestTV from "@/features/tv/useGetPopularTV";
import useGetLatestMovies from "@/features/movie/get/usePopularMovie";
import useGetPopularMovies from "@/features/movie/get/usePopularMovie";
import useGetPopularTV from "@/features/tv/useGetPopularTV";

const PopularHome = (props) => {
  const cardArrayLoading = Array(20).fill(null);
  const { isMovie, handleIsMovieTrue, handleIsMovieFalse } = props;
  const { data: movie, fetchMovies, isLoading } = useGetPopularMovies();
  const { data: tv, fetchTV } = useGetPopularTV();

  useEffect(() => {
    if (isMovie) fetchMovies();

    fetchTV();
  }, [isMovie]);

  return (
    <div className=" flex flex-col gap-3 mt-3">
      <div className=" flex flex-row gap-3 items-center">
        <HomeHeading text={"Popular"} />
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
              {!isLoading ? (
                <EachUtils
                  of={tv?.data?.results}
                  render={(item, i) => (
                    <VerticalTVCard key={item.id} data={item} />
                  )}
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

export default withIsMovie(PopularHome);
