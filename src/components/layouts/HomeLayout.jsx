"use client";

import { useGetMovie } from "@/features/movie/getMovie";
import HomeMovieDisplay from "../fragments/HomeMovieDisplay";
import { useEffect, useState } from "react";

const HomeLayout = () => {
  const [currentDisplayMovie, setCurrentDisplayMovie] = useState(0);
  const { data } = useGetMovie("/movie/popular");

  const handleCurrentDisplayMovie = () => {
    const intervalid = setInterval(() => {
      if (currentDisplayMovie >= 4) {
        setCurrentDisplayMovie(0);
      } else {
        setCurrentDisplayMovie(() => currentDisplayMovie + 1);
      }
    }, 10000);

    return () => clearInterval(intervalid);
  };

  useEffect(() => {
    handleCurrentDisplayMovie();
  }, [currentDisplayMovie]);
  console.log(currentDisplayMovie);
  return (
    <section>
      <div>
        <HomeMovieDisplay movie={data?.data?.results[currentDisplayMovie]} />
      </div>
    </section>
  );
};

export default HomeLayout;
