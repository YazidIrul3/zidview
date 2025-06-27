"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const SearchSidebarLayout = ({
  children: children,
  moviesLength,
  tvShowsLength,
}) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const path = usePathname();
  const pathName = path.split("/")[[2]];

  return (
    <div className=" flex flex-col lg:flex-row gap-3 lg:w-11/12 mx-auto lg:py-4">
      <nav className=" hidden shadow-sm shadow-slate-300 w-full h-[200px] rounded-b-sm lg:flex  flex-col accent-pink-300 ">
        <h1 className=" text-lg font-bold  bg-blue-400 text-slate-50 rounded-t-lg p-3">
          Search Results
        </h1>
        <Link
          className={`p-3 font-semibold flex justify-between items-center flex-row hover:bg-gray-100`}
          href={`/search/movie?query=${query}`}
        >
          <h3
            className={`${
              pathName === "movie" ? "text-yellow-500" : "text-slate-900"
            }`}
          >
            Movies
          </h3>
          <span className="bg-slate-300 rounded-full px-3 py-1 w-fit h-fit text-slate-900">
            {moviesLength}
          </span>
        </Link>
        <Link
          className="p-3 font-semibold flex justify-between items-center flex-row hover:bg-gray-100"
          href={`/search/tv?query=${query}`}
        >
          <h3
            className={`${
              pathName === "tv" ? "text-yellow-500" : "text-slate-900"
            }`}
          >
            TV Shows
          </h3>
          <span className="bg-slate-300 rounded-full px-3 py-1 w-fit h-fit text-slate-900">
            {tvShowsLength}
          </span>
        </Link>
      </nav>

      <nav className="flex flex-col shadow-sm shadow-slate-300 w-full h-fit rounded-b-sm lg:hidden">
        <h1 className=" text-lg font-bold  bg-blue-400 text-slate-50 rounded-t-lg p-3">
          Search Results
        </h1>
        <div className=" flex flex-row gap-3 overflow-x-scroll scrollbar-none">
          <Link
            className="p-3 font-semibold flex justify-between items-center flex-row gap-2 hover:bg-gray-100"
            href={`/search/movie?query=${query}`}
          >
            <h3>Movies</h3>
            <span className=" border-1 border-yellow-500 rounded-sm px-3 py-0.5 text-sm w-fit h-fit text-slate-900">
              {moviesLength}
            </span>
          </Link>
        </div>
      </nav>
      <main className=" px-3 pb-4">{children}</main>
    </div>
  );
};

export default SearchSidebarLayout;
