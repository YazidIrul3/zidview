"use client";

import useGet from "@/features/movie/useGet";
import { useEffect } from "react";

const TVShowLayout = () => {
  const { movie, popularMovies } = useGet("/movie/popular");

  useEffect(() => {
    popularMovies();
  }, [popularMovies]);

  return <div></div>;
};

export default TVShowLayout;
