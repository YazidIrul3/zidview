"use client";

import Heading1 from "@/components/elements/heading/Heading1";
import EachUtils from "@/utils/EachUtils";
import { useEffect, useState } from "react";
import VerticalCardLoading from "../isLoadingComponent/VerticalCardLoading";
import VerticalTVCard from "../card/VerticalTVCard";
import useGetEpisodeBySeason from "@/features/tv/detail/useGetEpisodeBySeason";
import TVEpisodeCard from "../card/TVEpisodeCard";
import useGetTVEpisodeImage from "@/features/tv/detail/useGetTVEpisodeImage";
import TVEpisodeCardLoading from "../isLoadingComponent/TVEpisodeCard";

const RecomendationAndSimilarTV = ({
  isLoadingRecomendation,
  isLoadingSimilar,
  isLoadingByID,
  recomendationMovie,
  movieByID,
  similarMovie,
  id,
}) => {
  const [currentSection, setCurrentSection] = useState("episodes");
  const arrayCardLoading = new Array(20).fill(null);
  const {
    data: tvEpisodes,
    fetchData: fetchTVEpisodes,
    isLoading: isLoadingEpisodes,
  } = useGetEpisodeBySeason();
  const {
    data: tvEpisodesImage,
    fetchData: fetchTVEpisodeImage,
    isLoading,
  } = useGetTVEpisodeImage();
  const [currentSeason, setCurrentSeason] = useState(0);

  const handleSeasonChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setCurrentSeason((prevValue) => (prevValue = value.split(" ")[1]));
  };

  useEffect(() => {
    fetchTVEpisodes(id, currentSeason | 0 | 1);
    fetchTVEpisodeImage(id, currentSeason | 0 | 1);
  }, [currentSeason]);

  return (
    <div className=" flex flex-col gap-3 pb-5">
      <div className=" flex flex-row items-center gap-7">
        <button
          className=" flex-col flex hover:cursor-grab"
          onClick={() => {
            setCurrentSection("episodes");
            setCurrentSeason(0);
          }}
        >
          <Heading1 text={"Episodes"} />
          {currentSection == "episodes" && (
            <div className=" w-full h-1 rounded-full px-2 bg-slate-900"></div>
          )}
        </button>

        <button
          className=" flex-col flex hover:cursor-grab"
          onClick={() => {
            setCurrentSeason(0);
            setCurrentSection("recomendations");
          }}
        >
          <Heading1 text={"Recomendations"} />
          {currentSection == "recomendations" && (
            <div className=" w-full h-1 rounded-full px-2 bg-slate-900"></div>
          )}
        </button>

        <button
          className=" flex-col flex"
          onClick={() => {
            setCurrentSeason(0);
            setCurrentSection("similar");
          }}
        >
          <Heading1 text={"Similar"} />
          {currentSection == "similar" && (
            <div className=" w-full h-1 rounded-full px-2 bg-slate-900"></div>
          )}
        </button>
      </div>

      <div className=" flex flex-row gap-7 mt-3 scrollbar-none overflow-scroll ">
        {currentSection == "recomendations" ? (
          isLoadingRecomendation &&
          recomendationMovie?.data?.results.length <= 0 ? (
            <EachUtils
              of={arrayCardLoading}
              render={(item, i) => <VerticalCardLoading key={i} />}
            />
          ) : (
            <EachUtils
              of={recomendationMovie?.data?.results}
              errorText={"Recomendations Movie not found"}
              render={(item, i) => <VerticalTVCard key={i} data={item} />}
            />
          )
        ) : currentSection == "similar" ? (
          isLoadingSimilar ? (
            <EachUtils
              of={arrayCardLoading}
              errorText={"Similar Movie  not found"}
              render={(item, i) => <VerticalCardLoading key={i} />}
            />
          ) : (
            <EachUtils
              of={similarMovie?.data?.results}
              errorText={"Similar Movie  not found"}
              render={(item, i) => <VerticalTVCard key={i} data={item} />}
            />
          )
        ) : isLoadingSimilar ? (
          <EachUtils
            of={arrayCardLoading}
            errorText={"Similar Movie  not foundd"}
            render={(item, i) => <VerticalCardLoading key={i} />}
          />
        ) : (
          <div className=" flex flex-col gap-3">
            <select
              onChange={handleSeasonChange}
              name=""
              id=""
              className=" px-2 py-1 outline-none"
            >
              <EachUtils
                of={movieByID?.data?.seasons}
                errorText={"Similar Movie  not found"}
                render={(item, i) => (
                  <option key={i}> Season {item?.season_number}</option>
                )}
              />
            </select>

            {isLoadingEpisodes ? (
              <EachUtils
                of={arrayCardLoading}
                render={(item, i) => <TVEpisodeCardLoading key={i} />}
              />
            ) : (
              <EachUtils
                of={tvEpisodes?.data?.episodes}
                errorText={"Episodes are  not found"}
                render={(item, i) => <TVEpisodeCard key={i} data={item} />}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecomendationAndSimilarTV;
