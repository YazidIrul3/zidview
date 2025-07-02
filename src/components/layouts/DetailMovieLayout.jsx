"use client";

import { useEffect, useState } from "react";
import CastDetailMovie from "../fragments/detailMovie/Cast";
import CommentDetailMovie from "../fragments/detailMovie/Comment";
import SidebarDetailMovie from "../fragments/detailMovie/Sidebar";
import TopDetailMovie from "../fragments/detailMovie/TopDetailMovie";
import RecomendationAndSimilarMovies from "../fragments/detailMovie/RecomendationAndSimilarMovies";
import useGet from "@/features/movie/useGet";
import withAuthAndNotFound from "@/utils/withAuthAndNotFound";

const DetailMovieLayout = ({ id }) => {
  const { data, fetchData: fetchMovies, isLoading } = useGet(`/movie/${id}`);
  const {
    data: movieCreadits,
    fetchData: fetchMovieCredits,
    isLoading: isLoadingCredits,
  } = useGet(`/movie/${id}/credits`);

  const {
    data: dataImages,
    fetchData: fetchMoviesImages,
    isLoading: isLoadingImages,
  } = useGet(`/movie/${id}/images`);
  const {
    data: movieKeywords,
    fetchData: fetchMoviesKeywords,
    isLoading: isLoadingKeywords,
  } = useGet(`/movie/${id}/keywords`);
  const {
    data: movieReviews,
    fetchData: fetchMoviesReviews,
    isLoading: isLoadingReviews,
  } = useGet(`/movie/${id}/reviews`);

  const {
    data: recomendationMovie,
    fetchData: fetchRecomendationMovie,
    isLoading: isLoadingRecomendation,
  } = useGet(`/movie/${id}/recommendations`);

  const {
    data: similarMovie,
    fetchData: fetchSiimilarMovie,
    isLoading: isLoadingSimilar,
  } = useGet(`/movie/${id}/similar`);
  const [isRecomendation, setIsRecomendation] = useState(true);
  const castData = movieCreadits?.data?.cast.filter(
    (e) => e.profile_path !== null
  );

  useEffect(() => {
    fetchMovies();
    fetchMoviesImages();
    fetchMovieCredits();
    fetchMoviesKeywords();
    fetchMoviesReviews();
    fetchRecomendationMovie();
    fetchSiimilarMovie();
  }, []);

  return (
    <main className=" flex flex-col gap-3 voerflow-hidden">
      <TopDetailMovie
        data={data}
        dataImages={dataImages}
        isLoadingById={isLoading}
        isLoadingImages={isLoadingImages}
      />

      <div className=" flex flex-col lg:flex-row  w-11/12 px-3 mx-auto pb-2 ">
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

export default withAuthAndNotFound(DetailMovieLayout);
