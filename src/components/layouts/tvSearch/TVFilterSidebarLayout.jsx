"use client";

import useGet from "@/features/movie/useGet";
import useMovieSearchGenres from "@/hooks/useMovieSearchGenres";
import useSorting from "@/hooks/useSorting";
import EachUtils from "@/utils/EachUtils";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

const TVFilterSIdebarLayout = ({ children: children }) => {
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const { data: movieGenre, fetchData: fetchGenre } =
    useGet("/genre/tv/list");
  const { genres, setMovieSearchGenres } = useMovieSearchGenres();
  const { sorting, setSorting } = useSorting();

  const handleOnChangeSorting = (e) => {
    const { name, value } = e.target;

    setSorting(value);
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  return (
    <div className=" flex lg:flex-row flex-col gap-4 w-11/12 mx-auto py-4">
      <nav className=" flex flex-col gap-3 lg:min-w-[250px] lg:w-[250px]">
        <h1 className=" text-xl font-bold text-slate-900 ">TV Shows</h1>

        <div className=" shadow-lg">
          <div>
            <div className=" hover:cursor-pointer p-3 flex flex-col gap-3">
              <div
                onClick={() => setShowSort(!showSort)}
                className=" flex flex-row justify-between  text-lg font-semibold items-center p-2 shadow-sm rounded-lg "
              >
                <h3>Sort</h3>

                <div className={` ${showSort ? "rotate-90" : "rotate-0"}`}>
                  <CaretRightIcon weight="bold" />
                </div>
              </div>
            </div>
            {showSort && (
              <select
                name=""
                id=""
                className=" outline-none p-3"
                onChange={handleOnChangeSorting}
              >
                <option value="popularity.desc">Popularity Descending</option>
                <option value="popularity.asc">Popularity Ascending</option>
                <option value="vote_average.desc">Rating Descending</option>
                <option value="vote_average.asc">Rating Ascending</option>
                <option value="primary_release_date.desc">
                  Realese Date Descending
                </option>
                <option value="primary_release_date.asc">
                  Realese Date Ascending
                </option>
                <option value="title.asc">{"Title (A-Z)"}</option>
                <option value="title.desc">{"Title (Z-A)"}</option>
              </select>
            )}
          </div>

          <div>
            <div className=" hover:cursor-pointer p-3 flex flex-col gap-3">
              <div
                onClick={() => setShowFilter(!showFilter)}
                className=" flex flex-row justify-between  text-lg p-2 font-semibold items-center shadow-sm rounded-lg "
              >
                <h3>Filter</h3>

                <div className={` ${showSort ? "rotate-90" : "rotate-0"}`}>
                  <CaretRightIcon weight="bold" />
                </div>
              </div>
            </div>
            {showFilter && (
              <div className=" flex flex-col gap-3 px-4">
                <h4 className=" font-semibold text-sm">Genre</h4>

                <div className=" flex flex-row items-center gap-2 flex-wrap">
                  <EachUtils
                    of={movieGenre?.data?.genres}
                    render={(item, i) => (
                      <h3
                        key={i}
                        onClick={(e) =>
                          setMovieSearchGenres(e.target.textContent)
                        }
                        name={item.name}
                        className={` hover:cursor-pointer w-fit h-fit px-3 py-1 text-xs ${
                          genres.includes(item.name)
                            ? "bg-slate-900 text-slate-50"
                            : "bg-slate-50 text-slate-900"
                        } rounded-lg `}
                      >
                        {item.name}
                      </h3>
                    )}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default TVFilterSIdebarLayout;
