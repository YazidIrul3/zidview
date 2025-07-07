"use client";

import {
  BookmarkSimpleIcon,
  ListIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useEffect, useState } from "react";
import MovieNavbarGroupsLink from "../elements/link/NavbarGroupsLink/MovieGroupsLink";
import TVNavbarGroupsLink from "../elements/link/NavbarGroupsLink/TVGroupsLink";
import MovieResponsiveNavbarGroupsLink from "../elements/link/ResponsiveNavbarGroupsLink/MovieGroupsLink";
import TVResponsiveNavbarGroupsLink from "../elements/link/ResponsiveNavbarGroupsLink/TVGroupsLink";
import NavbarSearchBar from "../fragments/NavbarSearchBar";

const Navbar = () => {
  const [yPosition, setYPosition] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMovieLinkGrups, setMovieLinkGrups] = useState(false);
  const [showTVLinkGrups, setShowTVLinkGrups] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    setYPosition(window.scrollY);
  }, []);

  return (
    <div className=" relative">
      <nav
        className={`${
          yPosition > 0 ? " top-0" : ""
        } bg-slate-900 text-slate-50 flex z-50  flex-row items-center  justify-between px-3 py-4  w-full`}
      >
        <div className=" flex flex-row items-center gap-6 ">
          <div>
            <h1 className=" font-bold text-2xl text-yellow-500">ZidView</h1>
          </div>
          <div className=" hidden lg:flex flex-row gap-4">
            <Link href={"/"} className=" font-bold">
              Home
            </Link>

            <div
              className=" relative lg:flex hidden"
              onMouseEnter={() => setMovieLinkGrups(true)}
              onMouseLeave={() => setMovieLinkGrups(false)}
            >
              <Link href={"/"} className=" font-bold">
                Movie
              </Link>

              {showMovieLinkGrups && (
                <MovieNavbarGroupsLink
                  setShowMovieLinkGrups={setMovieLinkGrups}
                />
              )}
            </div>

            <div
              className=" lg:flex relative hidden"
              onMouseEnter={() => setShowTVLinkGrups(true)}
              onMouseLeave={() => setShowTVLinkGrups(false)}
            >
              <Link href={"/"} className=" font-bold">
                TV
              </Link>

              {showTVLinkGrups && (
                <TVNavbarGroupsLink setShowTVLinkGrups={setShowTVLinkGrups} />
              )}
            </div>
          </div>
        </div>

        <div className=" flex flex-row items-center gap-7 ">
          {/* item list */}
          <div className=" lg:flex hidden flex-row items-center gap-4">
            <div className=" flex flex-col gap-1 items-center justify-center">
              <div className=" text-3xl">
                <BookmarkSimpleIcon weight="fill" />
              </div>

              <h2 className=" text-xs font-normal">Bookmarks</h2>
            </div>

            <button
              onClick={() => setShowSearch(!showSearch)}
              className=" flex flex-col gap-2 items-center justify-center"
            >
              <div
                onClick={() => setShowSearch(!showSearch)}
                className=" text-2xl "
              >
                <MagnifyingGlassIcon />
              </div>

              <h2 className=" text-xs font-normal">Cari</h2>
            </button>

            {/* profile */}
            <div className=" flex flex-col items-center gap-1">
              <div className=" text-3xl">
                <UserCircleIcon size={32} weight="fill" />
              </div>
              <h2 className=" text-xs font-normal">Sign In</h2>
            </div>
          </div>
        </div>

        <div className=" flex-row lg:hidden flex items-center gap-4">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className=" text-2xl "
          >
            <MagnifyingGlassIcon />
          </button>

          <button
            type="button"
            className="  flex text-3xl "
            onClick={(prev) => setShowMenu(!showMenu)}
          >
            <ListIcon />
          </button>
        </div>
      </nav>

      {showMenu && (
        <nav className=" fixed top-15 right-0 w-[200px] min-h-[500px] bg-slate-900 text-slate-50 px-5 py-12 flex flex-col justify-between">
          <div className=" flex flex-col gap-3">
            <div
              className=" relative"
              onClick={() => setMovieLinkGrups(!showMovieLinkGrups)}
            >
              <Link href={"/"} className=" font-bold">
                Movie
              </Link>

              {showMovieLinkGrups && <MovieResponsiveNavbarGroupsLink />}
            </div>

            <div
              className=" relative"
              onClick={() => setShowTVLinkGrups(!showTVLinkGrups)}
            >
              <Link href={"/"} className=" font-bold">
                TV
              </Link>

              {showTVLinkGrups && <TVResponsiveNavbarGroupsLink />}
            </div>
          </div>

          <div className=" flex flex-col gap-8">
            <Link
              href={""}
              className=" text-3xl p-2 border border-yellow-500 flex flex-row items-center gap-3 hover:text-yellow-500 hover:bg-slate-900 hover:border-slate-50"
            >
              <BookmarkSimpleIcon weight="fill" />
              <h4 className=" text-sm">Bookmark</h4>
            </Link>

            <div className=" text-3xl p-2 bg-yellow-500 flex flex-row justify-center items-center text-slate-900 font-bold gap-3 hover:text-yellow-500 hover:bg-slate-900 hover:border-slate-50">
              <h4 className=" text-sm">Logout</h4>
            </div>
          </div>
        </nav>
      )}

      {showSearch && <NavbarSearchBar />}
    </div>
  );
};

export default Navbar;
