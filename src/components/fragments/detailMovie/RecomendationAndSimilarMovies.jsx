"use client";

import Heading1 from "@/components/elements/heading/Heading1";
import EachUtils from "@/utils/EachUtils";
import { useEffect, useState } from "react";
import VerticalMovieCard from "../card/VerticalMovie]Card";
import VerticalCardLoading from "../isLoadingComponent/VerticalCardLoading";

const RecomendationAndSimilarMovies = ({
  isLoadingRecomendation,
  isLoadingSimilar,
  recomendationMovie,
  similarMovie,
}) => {
  const [isRecomendation, setIsRecomendation] = useState(true);
  const arrayCardLoading = new Array(20).fill(null);

  return (
    <div className=" flex flex-col gap-3">
      <div className=" flex flex-row items-center gap-7">
        <div
          className=" flex-col flex"
          onClick={() => setIsRecomendation(true)}
        >
          <Heading1 text={"Recomendations"} />
          {isRecomendation && (
            <div className=" w-full h-1 rounded-full px-2 bg-slate-900"></div>
          )}
        </div>

        <div
          className=" flex-col flex"
          onClick={() => setIsRecomendation(false)}
        >
          <Heading1 text={"Similar"} />
          {!isRecomendation && (
            <div className=" w-full h-1 rounded-full px-2 bg-slate-900"></div>
          )}
        </div>
      </div>

      <div className=" flex flex-row gap-7 mt-3 scrollbar-none overflow-scroll ">
        {isRecomendation ? (
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
              render={(item, i) => <VerticalMovieCard key={i} data={item} />}
            />
          )
        ) : isLoadingSimilar ? (
          <EachUtils
            of={arrayCardLoading}
            errorText={"Similar Movie  not found"}
            render={(item, i) => <VerticalCardLoading key={i} />}
          />
        ) : (
          <EachUtils
            of={similarMovie?.data?.results}
            errorText={"Similar Movie  not found"}
            render={(item, i) => <VerticalMovieCard key={i} data={item} />}
          />
        )}
      </div>
    </div>
  );
};

export default RecomendationAndSimilarMovies;
