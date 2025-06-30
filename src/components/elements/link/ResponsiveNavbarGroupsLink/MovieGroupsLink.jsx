import Link from "next/link";

const MovieResponsiveNavbarGroupsLink = () => {
  return (
    <div className="  flex flex-col  p-2 min-w-full text-slate-50 text-xs font-semibold">
      <Link href={""} className=" p-2 text-nowrap hover:text-yellow-500">
        Popular
      </Link>
      <Link href={""} className=" p-2 text-nowrap hover:text-yellow-500">
        Now Playing
      </Link>
    </div>
  );
};

export default MovieResponsiveNavbarGroupsLink;
