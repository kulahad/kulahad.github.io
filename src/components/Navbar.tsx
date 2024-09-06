import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { SocialLinks } from "../application/Data";
import { motion, useScroll } from "framer-motion";

function Navbar() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="sticky top-0 z-30  bg-black bg-opacity-70">
      <motion.div
        className="top-0 left-0 right-0 fixed h-1 bg-red-800  origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className="container flex items-center justify-between w-screen h-12 py-2 px-4 mx-auto text-white border-red-500">
        <div className="mx-4 flex border-red-700 border  bg-black">
          <div className=" pl-2 pr-1 bg-red-700 ">
            <p className=" font-thin text-black">Mohammed</p>
          </div>
          <p className=" font-thin ml-1 mr-2"> Ahad</p>
        </div>

        <div className="flex mx-4">
          <a
            className="mx-2 "
            title="Email link"
            target="_blank"
            href={SocialLinks.find((x) => x.name === "Email")?.link}
          >
            <MdEmail className="text-2xl hover:text-red-400" />
          </a>
          <a
            className="mx-2"
            title="Github link"
            rel="noopener"
            target="_blank"
            href={SocialLinks.find((x) => x.name === "Github")?.link}
          >
            <AiFillGithub className="text-2xl hover:text-gray-700" />
          </a>
          <a
            className="mx-2"
            title="LinkedIn link"
            rel="noopener"
            target="_blank"
            href={SocialLinks.find((x) => x.name === "LinkedIn")?.link}
          >
            <AiFillLinkedin className="text-2xl hover:text-blue-500" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
