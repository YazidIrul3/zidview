"use client";

import useGetFilterMovie from "@/features/movie/get/useGetFilterMovie";
import useGetMovieGenre from "@/features/movie/get/useGetMovieGenre";
import useMovieSearchGenres from "@/hooks/useMovieSearchGenres";
import EachUtils from "@/utils/EachUtils";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

const MovieSearchSIdebarLayout = ({ children: children }) => {
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const { data: movieGenre, fetchData: fetchGenre } = useGetMovieGenre();
  const { genres, setMovieSearchGenres } = useMovieSearchGenres();

  useEffect(() => {
    fetchGenre();
  }, []);

  return (
    <div className=" flex lg:flex-row flex-col gap-4 w-11/12 mx-auto py-4">
      <nav className=" flex flex-col gap-3 lg:min-w-[250px] lg:w-[250px]">
        <h1 className=" text-xl font-bold text-slate-900 ">Popular Movie</h1>

        <div>
          <div>
            <div className=" hover:cursor-pointer p-3 flex flex-col gap-3">
              <div
                onClick={() => setShowSort(!showSort)}
                className=" flex flex-row justify-between  text-lg font-semibold items-center shadow-sm rounded-lg "
              >
                <h3>Sort</h3>

                <div className={` ${showSort ? "rotate-90" : "rotate-0"}`}>
                  <CaretRightIcon weight="bold" />
                </div>
              </div>
            </div>
            {showSort && (
              <select name="" id="" className=" outline-none p-3">
                <option value="">Popularity Descending</option>
                <option value="">Popularity Ascending</option>
                <option value="">Rating Descending</option>
                <option value="">Rating Ascending</option>
                <option value="">Realese Date Descending</option>
                <option value="">Realese Date Ascending</option>
                <option value="">{"Title (A-Z)"}</option>
                <option value="">{"Title (Z-A)"}</option>
              </select>
            )}
          </div>

          <div>
            <div className=" hover:cursor-pointer p-3 flex flex-col gap-3">
              <div
                onClick={() => setShowFilter(!showFilter)}
                className=" flex flex-row justify-between  text-lg font-semibold items-center shadow-sm rounded-lg "
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

export default MovieSearchSIdebarLayout;
