"use client";

import { useEffect, useState } from "react";
import TopDetailTV from "../fragments/detailTV/TopDetailTV";
import CastDetailTV from "../fragments/detailTV/Cast";
import CommentDetailTV from "../fragments/detailTV/Comment";
import RecomendationAndSimilarTV from "../fragments/detailTV/RecomendationAndSimilarMovies";
import SidebarDetailTV from "../fragments/detailTV/Sidebar";
import useGetTVById from "@/features/tv/detail/useGetById";
import useGetTVKeywords from "@/features/tv/detail/useGetKeywords";
import useGetTVList from "@/features/tv/detail/useGetList";
import useGetRecomendationTV from "@/features/tv/detail/useGetRecomendation";
import useGetCreditsTV from "@/features/tv/detail/useGetCredits";
import useGetExternalIdsTV from "@/features/tv/detail/useGetExternalIds";
import useGetTVImagesById from "@/features/tv/detail/Images";
import useGetTVReview from "@/features/tv/detail/useGetReviews";
import useGetTVProviders from "@/features/tv/detail/useGetProviders";
import useGetSimilarTV from "@/features/tv/detail/useGetSimilar";
import useGetEpisodeBySeason from "@/features/tv/detail/useGetEpisodeBySeason";

const DetailTVLayout = ({ id }) => {
  const { data, fetchData: fetchTV, isLoading } = useGetTVById();
  const {
    data: tvCreadits,
    fetchData: fetchTVCredits,
    isLoading: isLoadingCredits,
  } = useGetCreditsTV();
  const {
    data: externalIdsTV,
    fetchData: fetchExternalIdsTV,
    isLoading: isLoadingExternalIdsTV,
  } = useGetExternalIdsTV();
  const {
    data: dataImages,
    fetchData: fetchTVImages,
    isLoading: isLoadingImages,
  } = useGetTVImagesById();

  const {
    data: tvKeywords,
    fetchData: fetchTVKeywords,
    isLoading: isLoadingKeywords,
  } = useGetTVKeywords();
  const {
    data: tvReviews,
    fetchData: fetchTVReviews,
    isLoading: isLoadingReviews,
  } = useGetTVReview();
  const {
    data: tvList,
    fetchData: fetchTVList,
    isLoading: isLoadingList,
  } = useGetTVList();

  const {
    data: recomendationTV,
    fetchData: fetchRecomendationTV,
    isLoading: isLoadingRecomendation,
  } = useGetRecomendationTV();

  const {
    data: similarTV,
    fetchData: fetchSimiliarTV,
    isLoading: isLoadingSimilar,
  } = useGetSimilarTV();
  const castData = tvCreadits?.data?.cast.filter(
    (e) => e.profile_path !== null
  );

  useEffect(() => {
    fetchTV(id);
    fetchTVImages(id);
    fetchTVCredits(id);
    fetchExternalIdsTV(id);
    fetchTVKeywords(id);
    fetchTVReviews(id);
    fetchTVList(id);
    fetchRecomendationTV(id);
    fetchSimiliarTV(id);
  }, []);

  useEffect(() => {
    if (!recomendationTV) {
    }
  }, [recomendationTV]);
  return (
    <main className=" flex flex-col gap-3 voerflow-hidden">
      <TopDetailTV
        data={data}
        dataImages={dataImages}
        isLoadingById={isLoading}
        isLoadingImages={isLoadingImages}
      />

      <div className=" flex flex-col lg:flex-row gap-3 w-11/12 px-3 mx-auto pb-2 ">
        <div className=" flex flex-col gap-7 lg:w-9/12 h-fit min-h-fit">
          <CastDetailTV data={castData} loading={isLoadingCredits} />

          <CommentDetailTV data={tvReviews} loading={isLoadingReviews} />
          <RecomendationAndSimilarTV
            isLoadingByID={isLoading}
            movieByID={data}
            isLoadingRecomendation={isLoadingRecomendation}
            isLoadingSimilar={isLoadingSimilar}
            recomendationTV={recomendationTV}
            similarTV={similarTV}
          />
        </div>

        <SidebarDetailTV data={data} tvKeywords={tvKeywords} />
      </div>
    </main>
  );
};

export default DetailTVLayout;
