"use client";

import useGetMovieImagesById from "@/features/movie/get/detail/ImagesMovie";
import useGetMovieById from "@/features/movie/get/detail/useGetMovieById";
import EachUtils from "@/utils/EachUtils";
import { useEffect, useState } from "react";
import useGetCreditsMovie from "@/features/movie/get/detail/useGetCreditsMovie";
import Heading1 from "../elements/heading/Heading1";
import useGetExternalIdsMovie from "@/features/movie/get/detail/useGetExternalIdsMovie";
import useGetMovieKeywords from "@/features/movie/get/detail/useGetMovieKeywords";
import VerticalMovieCard from "../fragments/card/VerticalMovie]Card";
import useGetMovieReview from "@/features/movie/get/detail/useGetReview";
import useGetRecomendationMovie from "@/features/movie/get/detail/useGetRecomendationMovie";
import useGetMovieList from "@/features/movie/get/detail/useGetMovieList";
import useGetSimilarMovie from "@/features/movie/get/detail/useGetSimilarMovie";
import CastDetailMovie from "../fragments/detailMovie/Cast";
import CommentDetailMovie from "../fragments/detailMovie/Comment";
import SidebarDetailMovie from "../fragments/detailMovie/Sidebar";
import useGetMovieProviders from "@/features/movie/get/detail/useGetMovieProviders";
import TopDetailMovie from "../fragments/detailMovie/TopDetailMovie";
import VerticalCardLoading from "../fragments/isLoadingComponent/VerticalCardLoading";
import RecomendationAndSimilarMovies from "../fragments/detailMovie/RecomendationAndSimilarMovies";

const DetailMovieLayout = ({ id }) => {
  const { data, fetchMovies, isLoading } = useGetMovieById();
  const {
    data: movieCreadits,
    fetchData: fetchMovieCredits,
    isLoading: isLoadingCredits,
  } = useGetCreditsMovie();
  const {
    data: externalIdsMovie,
    fetchData: fetchExternalIdsMovie,
    isLoading: isLoadingExternalIdsMovie,
  } = useGetExternalIdsMovie();
  const {
    data: dataImages,
    fetchMovies: fetchMoviesImages,
    isLoading: isLoadingImages,
  } = useGetMovieImagesById();

  const {
    data: movieKeywords,
    fetchData: fetchMoviesKeywords,
    isLoading: isLoadingKeywords,
  } = useGetMovieKeywords();
  const {
    data: movieReviews,
    fetchData: fetchMoviesReviews,
    isLoading: isLoadingReviews,
  } = useGetMovieReview();
  const {
    data: movieList,
    fetchData: fetchMoviesList,
    isLoading: isLoadingList,
  } = useGetMovieList();

  const {
    data: recomendationMovie,
    fetchData: fetchRecomendationMovie,
    isLoading: isLoadingRecomendation,
  } = useGetRecomendationMovie();
  const {
    data: movieProviders,
    fetchData: fetchMovieProviders,
    isLoading: isLoadingProviders,
  } = useGetMovieProviders();

  const {
    data: similarMovie,
    fetchData: fetchSiimilarMovie,
    isLoading: isLoadingSimilar,
  } = useGetSimilarMovie();
  const [isRecomendation, setIsRecomendation] = useState(true);
  const castData = movieCreadits?.data?.cast.filter(
    (e) => e.profile_path !== null
  );

  useEffect(() => {
    fetchMovies(id);
    fetchMoviesImages(id);
    fetchMovieCredits(id);
    fetchExternalIdsMovie(id);
    fetchMoviesKeywords(id);
    fetchMoviesReviews(id);
    fetchMoviesList(id);
    fetchRecomendationMovie(id);
    fetchSiimilarMovie(id);
    fetchMovieProviders(id);
  }, []);

  useEffect(() => {
    if (!recomendationMovie) {
    }
  }, [recomendationMovie]);
  return (
    <main className=" flex flex-col gap-3 voerflow-hidden">
      <TopDetailMovie
        data={data}
        dataImages={dataImages}
        isLoadingById={isLoading}
        isLoadingImages={isLoadingImages}
      />

      <div className=" flex flex-col lg:flex-row gap-3 w-11/12 px-3 mx-auto pb-2 ">
        <div className=" flex flex-col gap-7 lg:w-9/12 h-fit min-h-fit">
          <CastDetailMovie data={castData} loading={isLoadingCredits} />

          <CommentDetailMovie data={movieReviews} loading={isLoadingReviews} />
          <RecomendationAndSimilarMovies
            isLoadingRecomendation={isLoadingRecomendation}
            isLoadingSimilar={isLoadingSimilar}
            recomendationMovie={recomendationMovie}
            similarMovie={similarMovie}
          />
        </div>

        <SidebarDetailMovie data={data} movieKeywords={movieKeywords} />
      </div>
    </main>
  );
};

export default DetailMovieLayout;
