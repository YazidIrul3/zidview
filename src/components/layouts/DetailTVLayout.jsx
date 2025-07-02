"use client";

import { useEffect, useState } from "react";
import TopDetailTV from "../fragments/detailTV/TopDetailTV";
import CastDetailTV from "../fragments/detailTV/Cast";
import CommentDetailTV from "../fragments/detailTV/Comment";
import RecomendationAndSimilarTV from "../fragments/detailTV/RecomendationAndSimilarTV";
import SidebarDetailTV from "../fragments/detailTV/Sidebar";
import useGet from "@/features/movie/useGet";

const DetailTVLayout = ({ id }) => {
  const { data, fetchData: fetchTV, isLoading } = useGet(`/tv/${id}`);
  const {
    data: tvCreadits,
    fetchData: fetchTVCredits,
    isLoading: isLoadingCredits,
  } = useGet(`/tv/${id}/credits`);

  const {
    data: dataImages,
    fetchData: fetchTVImages,
    isLoading: isLoadingImages,
  } = useGet(`/tv/${id}/images`);

  const {
    data: tvKeywords,
    fetchData: fetchTVKeywords,
    isLoading: isLoadingKeywords,
  } = useGet(`/tv/${id}/keywords`);
  const {
    data: tvReviews,
    fetchData: fetchTVReviews,
    isLoading: isLoadingReviews,
  } = useGet(`/tv/${id}/reviews`);

  const {
    data: recomendationTV,
    fetchData: fetchRecomendationTV,
    isLoading: isLoadingRecomendation,
  } = useGet(`/tv/${id}/recommendations`);

  const {
    data: similarTV,
    fetchData: fetchSimiliarTV,
    isLoading: isLoadingSimilar,
  } = useGet(`/tv/${id}/similar`);

  const castData = tvCreadits?.data?.cast.filter(
    (e) => e.profile_path !== null
  );

  useEffect(() => {
    fetchTV();
    fetchTVImages();
    fetchTVCredits();
    fetchTVKeywords();
    fetchTVReviews();
    fetchRecomendationTV();
    fetchSimiliarTV();
  }, []);

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
            id={id}
          />
        </div>

        <SidebarDetailTV data={data} tvKeywords={tvKeywords} />
      </div>
    </main>
  );
};

export default DetailTVLayout;
