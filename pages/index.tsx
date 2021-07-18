import Head from "next/head";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen bg-black">
      <div className="sticky z-50 border-b border-white ">
        <nav className="container flex items-center justify-between w-screen h-12 mx-auto text-white ">
          <div className="mx-4">
            <p>Mohammed Ahad</p>
          </div>

          <div className="flex mx-4">
            <a className="mx-2 " href="mailto:mohammed.muqtadir.ahad@gmail.com">
              <MdEmail className="text-2xl " />
            </a>
            <a className="mx-2" href="https://github.com/kulahad">
              <AiFillGithub className="text-2xl " />
            </a>
            <a
              className="mx-2"
              href="https://www.linkedin.com/in/muqtadir-ahad/"
            >
              <AiFillLinkedin className="text-2xl " />
            </a>
            {/* <a className="m-1">
            <MdEmail />
          </a> */}
          </div>
        </nav>
      </div>
      <section className="container flex items-center w-full h-full mx-auto bg-background-pattern">
        <div className="flex flex-col mx-4 text-white lg:w-1/3 ">
          <h1 className="text-3xl font-normal ">
            Software <span className="text-blue-500 ">Engineer</span>
          </h1>
          <p className="my-2 text-lg font-thin leading-6 ">
            Software Engineering graduate with a keen interest in learning and
            developing new and custom-made software. Passionate about
            programming and innovation, eager to learn and ready to make a
            difference.
          </p>
          <div className="flex justify-start">
            <a
              className="p-2 border border-white rounded-sm hover:bg-blue-600 hover:text-white"
              href=""
            >
              Contact Me
            </a>
            <a
              className="p-2 mx-2 border border-white rounded-sm hover:bg-blue-600 hover:text-white"
              href=""
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
