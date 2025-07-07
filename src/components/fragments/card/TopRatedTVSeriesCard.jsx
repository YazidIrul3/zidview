import Image from "next/image";
import Link from "next/link";

const TopRatedTVSeriesCard = ({ data, no }) => {
  return (
    <Link href={`/tv/${data?.id}`} className=" flex flex-col gap-3 relative ">
      <div className=" ">
        <Image
          className=" min-w-[170px] h-fit rounded-2xl px-3"
          src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
          alt={data.name}
          width={100}
          height={100}
        />
      </div>
      <div className=" absolute bottom-0 left-0">
        <h1 className=" text-8xl font-bold font-outline-4 text-slate-50 font-sans">
          {no}
        </h1>
      </div>
    </Link>
  );
};

export default TopRatedTVSeriesCard;
