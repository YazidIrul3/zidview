"use client";

import useGet from "@/features/movie/useGet";
import EachUtils from "@/utils/EachUtils";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import TopRatedTVSeriesCard from "./card/TopRatedTVSeriesCard";
import Link from "next/link";

const NavbarSearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, fetchData } = useGet(
    `/search/multi?query=${searchValue}`
  );
  console.log(data);

  const handleOnSearch = (e) => {
    const { name, value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    fetchData();
  }, [searchValue]);

  return (
    <div className=" relative text-slate-50 w-full min-w-full">
      <div className=" flex flex-row items-center gap-3 bg-gray-700 px-4 duration-500">
        <div className=" text-xl font-bold ">
          <MagnifyingGlassIcon weight="bold" />
        </div>
        <input
          type="text"
          onChange={handleOnSearch}
          placeholder="search anything"
          className="  outline-none px-2 py-3 w-full   "
        />
      </div>

      {searchValue != "" && (
        <div
          onClick={() => setSearchValue("")}
          className=" flex flex-col h-[300px] overflow-x-hidden bg-slate-900 text-slate-50 overflow-y-scroll scrollbar-none w-full"
        >
          <EachUtils
            of={data?.data?.results}
            render={(item, i) => (
              <Link
                href={`/${item?.media_type}/${item?.id}`}
                key={i}
                className=" font-semibold w-fit p-2"
              >
                <h1>{item?.name}</h1>
              </Link>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default NavbarSearchBar;
