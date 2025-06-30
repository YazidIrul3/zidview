import Link from "next/link";

const TVNavbarGroupsLink = ({ setShowTVLinkGrups }) => {
  return (
    <div
      onMouseEnter={() => setShowTVLinkGrups(true)}
      onMouseLeave={() => setShowTVLinkGrups(false)}
      className=" bg-slate-50 rounded-xl -right-10 top-6 flex flex-col absolute text-slate-900 p-2 min-w-[100px] w-[100px] text-xs font-semibold"
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

export default TVNavbarGroupsLink;
