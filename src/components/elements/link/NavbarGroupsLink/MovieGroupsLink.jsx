import Link from "next/link";

const MovieNavbarGroupsLink = ({ setShowMovieLinkGrups }) => {
  return (
    <div
      onMouseEnter={() => setShowMovieLinkGrups(true)}
      onMouseLeave={() => setShowMovieLinkGrups(false)}
      className=" bg-slate-50 rounded-xl -right-10 flex flex-col top-6 absolute text-slate-900 p-2 min-w-[100px] w-[100px] text-xs font-semibold"
    >
      <Link href={""} className=" p-2 text-nowrap hover:bg-slate-200">
        Popular
      </Link>
      <Link href={""} className=" p-2 text-nowrap hover:bg-slate-200">
        Now Playing
      </Link>
    </div>
  );
};

export default MovieNavbarGroupsLink;
