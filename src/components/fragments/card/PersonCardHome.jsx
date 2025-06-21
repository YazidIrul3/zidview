import Image from "next/image";

const PersonCardHome = ({ data }) => {
  const popularityWidth = Math.round(data?.popularity * 10);

  return (
    <div className={` flex flex-row items-center gap-3 min-w-fit h-fit py-2`}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${data?.profile_path}`}
        alt="user_img"
        width={100}
        height={100}
        className=" w-[47px] h-[50px] rounded-full"
      />
      <div className=" flex flex-col gap-2">
        <h1 className=" font-bold text-sm">{data?.name}</h1>
        <div className=" flex flex-row items-center gap-3">
          <div
            className={`h-1 bg-linear-to-r from-yellow-500 to-amber-600 w-[200px]`}
          ></div>
          <h3 className=" text-xs font-bold">{data?.popularity}</h3>
        </div>
      </div>
    </div>
  );
};

export default PersonCardHome;
