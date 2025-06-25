import useGetTVEpisodeImage from "@/features/tv/detail/useGetTVEpisodeImage";
import Image from "next/image";
import { useEffect } from "react";

const TVEpisodeCard = ({ data }) => {
  const { id, season_number } = data;

  return (
    <div className=" flex flex-row  gap-3">
      <Image
        className=" min-w-[220px] w-[120px] h-fit rounded-sm"
        src={`https://image.tmdb.org/t/p/original${data?.still_path}`}
        alt={""}
        width={200}
        height={300}
      />
      <div className=" flex flex-col gap-">
        <h1 className=" text-lg font-bold text-slate-900">{data?.name}</h1>
        <p className=" text-sm">Episode {data?.episode_number}</p>
      </div>
    </div>
  );
};

export default TVEpisodeCard;
