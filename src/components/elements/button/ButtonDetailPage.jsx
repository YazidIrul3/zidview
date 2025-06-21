"use client";
import { useState } from "react";

const ButtonDetailPage = ({ children: children, text }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      type="button"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className=" text-xl w-fit h-fit p-3 rounded-full bg-slate-900 relative"
    >
      {children}

      {isHover && (
        <div className=" absolute bg-slate-900 -bottom-9 -left-7 w-fit h-fit text-slate-50 font-bold text-xs px-3 py-1">
          <h5>{text}</h5>
        </div>
      )}
    </button>
  );
};

export default ButtonDetailPage;
