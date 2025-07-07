"use client";

import { getUserAccountProfileColor } from "@/utils/getUserAccountProfileColor";
import { StarIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useState } from "react";

const ReviewCard = ({ data }) => {
  const firstAlphabetUsername = data?.author_details?.username
    .charAt(0)
    .toUpperCase();
  const bgColor = getUserAccountProfileColor(firstAlphabetUsername);
  const [allComments, setAllComments] = useState(false);

  return (
    <div className=" text-slate-900 flex flex-col gap-3">
      <div className=" flex-row flex gap-3">
        {data?.author_details?.avatar_path != null ? (
          <Image
            className=" w-[50px] h-[50px] rounded-full"
            src={`https://image.tmdb.org/t/p/original${data?.author_details?.avatar_path}`}
            alt={data.author}
            width={100}
            height={100}
          />
        ) : (
          <div
            className={` w-[50px] h-[50px] rounded-full  flex justify-center items-center text-slate-50 font-bold ${bgColor}`}
          >
            <h1>{firstAlphabetUsername}</h1>
          </div>
        )}
        <div>
          <h1 className=" font-bold text-xl">
            A review by {data?.author_details?.username}
          </h1>
          <div className="  flex flex-row items-center gap-2 ">
            <div className="text-xs w-[60px] h-fit flex justify-center items-center  py-1  flex-row gap-1 rounded-lg bg-slate-800 text-slate-50">
              <StarIcon weight="fill" />
              <div>{data?.author_details?.rating * 10}%</div>
            </div>
            <p className=" text-sm font-light ">
              Written by{" "}
              <span className=" font-bold">
                {data?.author_details?.username}
              </span>{" "}
              on {data?.created_at.split("T")[0]}
            </p>
          </div>
        </div>
      </div>
      <p
        className={`text-justify ${allComments ? "" : "line-clamp-4"} `}
        dangerouslySetInnerHTML={{ __html: data?.content }}
      >
        {/* {data?.content} */}
      </p>
      {!allComments && (
        <p
          onClick={() => setAllComments(true)}
          className=" hover:cursor-pointer"
        >
          See more
        </p>
      )}
    </div>
  );
};

export default ReviewCard;
