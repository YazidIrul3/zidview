import Image from "next/image";

const PersonCardHome = ({ data }) => {
  const popularityWidth = Math.round(data?.popularity * 10);
  console.log(popularityWidth);

  return (
    <div className=" flex flex-row items-center gap-3 w-fit">
      <Image
        src={`https://image.tmdb.org/t/p/w500${data?.profile_path}`}
        alt="user_img"
        width={100}
        height={100}
        className=" w-[47px] h-[50px] rounded-full"
      />
      <div>
        <h1 className=" font-bold text-sm">{data?.name}</h1>
        <div className=" flex flex-row items-center gap-3">
          <div
            className={`h-1 min-w-[${popularityWidth}px] bg-yellow-500`}
          ></div>
          <h3 className=" text-xs font-bold">{data?.popularity}</h3>
        </div>
      </div>
    </div>
  );
};

export default PersonCardHome;
