"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { useState } from "react";
const NavBar = () => {
  const [toggleLinks, setToggleLinks] = useState(true);
  const handleClick = () => setToggleLinks(!toggleLinks);
  const Links = ["Home", "What is GPT?", "Features", "Possibility", "Blog"];
  return (
    <nav className="section py-10 text-lg relative ">
      <div className="flex items-center justify-between ">
        <div className="flex items-center ">
          <div className=" mr-[68px]">
            <Image src={logo} alt={"Logo"} width={62} height={16} />
          </div>
          <ul
            className={
              toggleLinks
                ? `flex gap-8 max-lg:hidden`
                : `absolute right-4 flex flex-col gap-6 bottom-[-252px] p-6 bg-footer w-60 scale-up-tr`
            }
          >
            {Links.map((link) => (
              <Link
                key={link}
                href={`#${link}`}
                className=" transition-all max-lg:hover:pl-2"
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex gap-7 items-center">
          <Link href={""} className="max-sm:hidden">
            Sign in
          </Link>
          <Link
            href={""}
            className="bg-[#FF4820] px-12 py-4 rounded-md max-sm:hidden"
          >
            Sign up
          </Link>
          <div
            className="w-7 flex flex-col justify-between h-7 items-end lg:hidden group cursor-pointer"
            onClick={handleClick}
          >
            <span className="w-full h-[3px] bg-white"></span>
            <span className="w-1/2 h-[3px] bg-white transition-all group-hover:w-full"></span>
            <span className="w-full h-[3px] bg-white"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
