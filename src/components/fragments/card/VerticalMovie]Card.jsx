import useHoverCard from "@/hooks/useHoverCard";
import Image from "next/image";
import Link from "next/link";

const VerticalMovieCard = ({ data }) => {
  const userScore = Math.round(data?.vote_average * 10);

  return (
    <div className=" relative">
      <Link href={`/movie/${data?.id}`} className=" flex flex-col gap-3  ">
        <div className="relative">
          <Image
            className=" min-w-[170px] h-[250px] rounded-2xl"
            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            alt={data.title | data.name | "card_img"}
            width={200}
            height={300}
          />
          <div className=" text-lg font-bold text-slate-50 absolute bottom-3 left-2  rounded-full">
            <div className=" w-[40px] h-[40px] px-3 py-1 flex justify-center items-center rounded-full bg-slate-900 text-xs relative">
              <h1>{`${userScore}%`}</h1>
            </div>
            <div
              className={` w-[40px] h-[40px] px-2 py-1 flex justify-center items-center rounded-full  border-solid border-3 text-xs absolute top-0 mask-conic-from-0%
              mask-conic-to-${userScore}% ${
                userScore >= 80
                  ? "border-green-500"
                  : userScore >= 60
                  ? "border-amber-500"
                  : "border-red-500"
              }`}
            ></div>
          </div>
        </div>

        <div>
          <h1 className=" font-bold text-slate-900 text-lg hover:text-blue-500">
            {data.title}
          </h1>
          <h3>{data.release_date}</h3>
        </div>
      </Link>
    </div>
  );
};

export default VerticalMovieCard;
