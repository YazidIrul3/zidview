"use client";

import useGetMovies from "@/features/movie/get/useGetPopularMovie";
import { useEffect } from "react";

const TVShowLayout = () => {
  const { movie, popularMovies } = useGetMovies();

  console.log(movie);

  useEffect(() => {
    popularMovies();
  }, [popularMovies]);

  return <div></div>;
};

export default TVShowLayout;
