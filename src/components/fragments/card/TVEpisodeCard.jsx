import useGetTVEpisodeImage from "@/features/tv/detail/useGetTVEpisodeImage";
import { ImageIcon, StarIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useEffect } from "react";

const TVEpisodeCard = ({ data }) => {
  console.log(data?.vote_average);

  return (
    <div className=" flex flex-row  gap-3">
      {data?.still_path != null ? (
        <Image
          className=" min-w-[220px] w-[120px] h-fit rounded-sm"
          src={`https://image.tmdb.org/t/p/original${data?.still_path}`}
          alt={""}
          width={200}
          height={300}
        />
      ) : (
        <div className="min-w-[220px] w-[120px] h-[130px] bg-gray-300 text-slate-400 font-bold text-7xl flex justify-center items-center">
          <ImageIcon />
        </div>
      )}
      <div className=" flex flex-col gap-1">
        <div className=" flex flex-row items-center gap-4">
          <h1 className=" text-lg font-bold text-slate-900">{data?.name}</h1>
          <div className="text-xs w-[60px] h-fit flex justify-center items-center  py-1  flex-row gap-1 rounded-lg bg-slate-800 text-slate-50">
            <StarIcon weight="fill" />
            <div>{Math.floor(data?.vote_average * 10)}%</div>
          </div>
        </div>

        <p className=" text-sm">Episode {data?.episode_number}</p>
      </div>
    </div>
  );
};

export default TVEpisodeCard;
