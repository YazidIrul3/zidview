"use client";

import { axiosInstance } from "@/libs/axiosInstance";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useGet = (path) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`${path}`);

      setIsLoading(false);
      setData(response);
    } catch (error) {
      console.log(error);
      router.push("/not-found");
    }
  };

  return {
    data,
    isLoading,
    fetchData,
  };
};

export default useGet;
