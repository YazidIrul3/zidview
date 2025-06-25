import Image from "next/image";

const CastCard = ({ data }) => {
  return (
    <div className=" flex flex-col gap-2 h-fit">
      <Image
        className=" min-w-[120px] w-[120px] h-[180px] rounded-2xl"
        src={`https://image.tmdb.org/t/p/original${data?.profile_path}`}
        alt={data.original_name | ""}
        width={200}
        height={300}
      />
      <div className=" flex flex-col gap-1">
        <h3 className=" text-sm font-bold">{data?.original_name}</h3>
        <p className=" text-xs">{data?.character}</p>
      </div>
    </div>
  );
};

export default CastCard;
