"use client";

import ButtonDetailPage from "@/components/elements/button/ButtonDetailPage";
import dateUtils from "@/utils/dateUtils";
import EachUtils from "@/utils/EachUtils";
import {
  BookmarkSimpleIcon,
  FacebookLogoIcon,
  HeartStraightIcon,
  InstagramLogoIcon,
  ListDashesIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const TopDetailMovie = ({
  data,
  dataImages,
  isLoadingById,
  isLoadingImages,
}) => {
  const yearRelease = data?.data?.release_date.split("-")[0];
  const userScore = Math.round(data?.data?.vote_average * 10);

  return (
    <div>
      {isLoadingById || isLoadingImages ? (
        <div className=" w-full h-[400px] bg-slate-900 animate-pulse"></div>
      ) : (
        <div className="  p-3 relative">
          <Image
            src={`https://image.tmdb.org/t/p/w500${dataImages?.data?.backdrops[1]?.file_path}`}
            alt="user_img"
            width={160}
            height={140}
            priority
            className=" w-full h-full rounded-sm absolute top-0 left-0 object-cover"
          />
          <div className=" w-full h-full absolute top-0 left-0 bg-slate-700 opacity-80"></div>
          <div
            className={` lg:w-11/12 w-11/12 mx-auto flex flex-col lg:flex-row gap-7 items-center relative py-2 px-3 bg-no-repeat object-cover`}
          >
            <div>
              <Image
                src={`https://image.tmdb.org/t/p/w500${dataImages?.data?.posters[0]?.file_path}`}
                alt="user_img"
                width={100}
                height={100}
                priority
                className=" w-fit  min-w-[270px] h-[400px] rounded-sm"
              />

              <div></div>
            </div>

            {/* top right start  */}
            <div className=" flex flex-col gap-5">
              <div className=" text-slate-50 ">
                <h1 className=" text-2xl font-bold">
                  {`${data?.data?.title} (${yearRelease})`}{" "}
                </h1>
                <div className=" flex flex-row items-center gap-2">
                  <h2 className=" text-sm text-white">
                    {dateUtils(data?.data?.release_date)}
                  </h2>
                  <div className=" w-1 h-1 rounded-full bg-white "></div>

                  <div className=" flex flex-row gap-1">
                    <EachUtils
                      of={data?.data?.genres}
                      render={(item, i) => {
                        return (
                          <h2 key={i} className=" text-sm text-white">
                            {i !== data?.data?.genres.length - 1
                              ? item.name + ", "
                              : item.name}
                          </h2>
                        );
                      }}
                    />
                  </div>
                </div>

                <div className=" flex flex-col gap-3 h-fit">
                  <div className=" flex flex-row items-center gap-2 mt-5">
                    <div className=" text-lg font-bold text-slate-50 relative rounded-full">
                      <div className=" w-[60px] h-[60px] px-3 py-1 flex justify-center items-center rounded-full bg-slate-900 text-lg relative">
                        <h1>{`${userScore}%`}</h1>
                      </div>
                      <div
                        className={` w-[60px] h-[60px] px-2 py-1 flex justify-center border-solid  bottom-0 left-0  items-center rounded-full   border-3 text-xs absolute top-0 mask-conic-from-0%
                      mask-conic-to-${userScore}% ${
                          userScore >= 80
                            ? "border-green-500"
                            : userScore >= 60
                            ? "border-amber-500"
                            : "border-red-500"
                        }`}
                      ></div>
                    </div>
                    <h1 className=" font-bold text-xl">User Score</h1>
                    <div className=" flex flex-row gap-2 items-center text-yellow-500 text-3xl w-full h-fit">
                      <Link
                        href={`https://www.instagram.com/${data?.data?.instagram_id}/`}
                        className=" "
                      >
                        <InstagramLogoIcon weight="bold" />
                      </Link>

                      <Link
                        href={`https://www.facebook.com/${data?.data?.facebook_id}/`}
                        className=""
                      >
                        <FacebookLogoIcon weight="bold" />
                      </Link>

                      <Link
                        href={`https://x.com/${data?.data?.twitter_id}/`}
                        className=""
                      >
                        <TwitterLogoIcon weight="fill" />
                      </Link>
                    </div>
                  </div>

                  <div className=" flex flex-row gap-3 items-center">
                    <ButtonDetailPage text={"Add to list"}>
                      <ListDashesIcon weight="bold" />
                    </ButtonDetailPage>

                    <ButtonDetailPage text={"Add to favorite"}>
                      <HeartStraightIcon weight="fill" />
                    </ButtonDetailPage>

                    <ButtonDetailPage text={"Add to watchlist"}>
                      <BookmarkSimpleIcon weight="fill" />
                    </ButtonDetailPage>
                  </div>

                  <div className=" flex flex-col gap-3">
                    <p
                      className=" font-stretch-125%
                  italic text-sm"
                    >
                      {data?.data?.tagline}
                    </p>

                    <div className=" flex flex-col gap-2">
                      <h3 className="font-bold text-xl">Overview</h3>
                      <p className=" text-sm text-justify">
                        {data?.data?.overview}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* top right end  */}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopDetailMovie;
