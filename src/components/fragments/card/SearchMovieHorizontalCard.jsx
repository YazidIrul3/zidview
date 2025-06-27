import { ImageIcon } from "@phosphor-icons/react";
import { StarIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const SearchMovieHorizontalCard = ({ data }) => {
  return (
    <Link
      href={`/movie/${data?.id}`}
      className=" flex flex-r0w items-center gap-3"
    >
      {data?.poster_path != null ? (
        <Image
          className=" w-[90px] h-fit "
          src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
          alt={""}
          width={200}
          height={300}
        />
      ) : (
        <div className="min-w-[90px] w-[90px] h-[130px] bg-gray-300 text-slate-400 font-bold text-7xl flex justify-center items-center">
          <ImageIcon />
        </div>
      )}
      <div className=" flex flex-col gap-1">
        <h1 className=" font-bold text-lg">
          {data?.title} <span>({data?.original_title})</span>
        </h1>
        <div className="text-xs w-[60px] h-fit flex justify-center items-center  py-1  flex-row gap-1 rounded-lg bg-slate-800 text-slate-50">
          <StarIcon weight="fill" />
          <div>{Math.round(data?.vote_average * 10)}%</div>
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: data?.overview }}
          className=" text-sm line-clamp-2"
        ></p>
      </div>
    </Link>
  );
};

export default SearchMovieHorizontalCard;
