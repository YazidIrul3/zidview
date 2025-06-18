"use client";

import { axiosInstance } from "@/libs/axiosInstance";
import { useEffect, useState } from "react";

export const useGetMovie = (path,condition) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoadning] = useState(true);
  const getMovie = async () => {
    try {
      const response = await axiosInstance.get(path);

      setData(response);
      setIsLoadning(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [ condition]);

  return { data, isLoading };
};
