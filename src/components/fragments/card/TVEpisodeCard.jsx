import { ImageIcon, StarIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const TVEpisodeCard = ({ data }) => {
  return (
    <Link href={`/tv/${data?.id}`} className=" flex flex-row  gap-3">
      {data?.still_path != null ? (
        <Image
          className=" min-w-[220px] w-[120px] h-fit rounded-sm"
          src={`https://image.tmdb.org/t/p/original${data?.still_path}`}
          alt={""}
          width={100}
          height={100}
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
    </Link>
  );
};

export default TVEpisodeCard;
