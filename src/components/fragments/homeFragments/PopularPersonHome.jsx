"use client";

import useGetPopularPerson from "@/features/person/useGetPopularPerson";
import EachUtils from "@/utils/EachUtils";
import { useEffect, useState } from "react";
import PersonCardHome from "../card/PersonCardHome";
import PersonCardHomeLoading from "../isLoadingComponent/PersonHomeCardLoading";
import Heading1 from "@/components/elements/heading/Heading1";

const PopularPersonHome = () => {
  const cardArrayIsLoading = Array(20).fill(null);
  const { data, fetchPerson, isLoading } = useGetPopularPerson();

  useEffect(() => {
    fetchPerson();
  }, []);

  return (
    <div className="mt-3 flex flex-col gap-3">
      <Heading1 text={"Popular Person"} />
      <div className=" pl-3 flex flex-row gap-3 scrollbar-none overflow-x-scroll overflow-y-hidden">
        {isLoading ? (
          <EachUtils
            of={cardArrayIsLoading}
            render={(item, i) => <PersonCardHomeLoading key={i} />}
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
