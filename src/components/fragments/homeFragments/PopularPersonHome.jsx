"use client";

import HomeHeading from "@/components/elements/h1/HomeHeading";
import useGetPopularPerson from "@/features/person/useGetPopularPerson";
import EachUtils from "@/utils/EachUtils";
import { useEffect, useState } from "react";
import VerticalCardLoading from "../isLoadingComponent/VerticalCardLoading";
import PersonCardHome from "../card/PersonCardHome";

const PopularPersonHome = () => {
  const cardArrayIsLoading = Array(20).fill(null);
  const { data, fetchPerson, isLoading } = useGetPopularPerson();

  console.log(data?.data?.results);

  useEffect(() => {
    fetchPerson();
  }, []);

  return (
    <div className="mt-3 flex flex-col gap-3">
      <HomeHeading text={"Popular Person"} />
      <div className=" pl-3 grid grid-cols-1 gap-3 lg:grid-cols-2 ">
        {isLoading ? (
          <EachUtils
            of={cardArrayIsLoading}
            render={(item, i) => <VerticalCardLoading key={i} />}
          />
        ) : (
          <EachUtils
            of={data?.data?.results}
            render={(item, i) => <PersonCardHome key={item.id} data={item} />}
          />
        )}
      </div>
    </div>
  );
};

export default PopularPersonHome;
