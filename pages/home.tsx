import React from "react";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Typewriter from "typewriter-effect";

export default function home() {
  const bg = `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1014%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M878.82 208.77 a96.45 96.45 0 1 0 192.9 0 a96.45 96.45 0 1 0 -192.9 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1001.15 421.68 a171.05 171.05 0 1 0 342.1 0 a171.05 171.05 0 1 0 -342.1 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M848.69 298.9 a151.54 151.54 0 1 0 303.08 0 a151.54 151.54 0 1 0 -303.08 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1136.28 27.93 a180.1 180.1 0 1 0 360.2 0 a180.1 180.1 0 1 0 -360.2 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M-72.04 409.91 a97.19 97.19 0 1 0 194.38 0 a97.19 97.19 0 1 0 -194.38 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M479.45 125.79 a114.17 114.17 0 1 0 228.34 0 a114.17 114.17 0 1 0 -228.34 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1014'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e`;
  return (
    <main className="flex w-screen h-screen lg:flex-col">
      <div className="flex w-full h-full ">
        <section className="flex flex-col bg-white lg:w-1/2 lg:h-full font-secondary">
          <div className="m-4 ">
            <p className="inline p-2 text-lg font-semibold text-white bg-black hover:bg-white hover:text-red-600">
              Mohammed Ahad
            </p>
          </div>

          <div className="flex flex-col m-auto">
            <h1 className="navigation-item ">
              About <span className="text-white">me</span>
            </h1>
            <h1 className="navigation-item">Education</h1>
            <h1 className="navigation-item">Experience</h1>
            <h1 className="navigation-item">Technologies</h1>
            <h1 className="navigation-item">
              Contact <span className="text-white">me</span>
            </h1>
          </div>
          <div className="flex p-4 ml-auto text-4xl">
            <a className="mx-2 " href="mailto:mohammed.muqtadir.ahad@gmail.com">
              <MdEmail className="hover:text-red-400" />
            </a>
            <a className="mx-2" href="https://github.com/kulahad">
              <AiFillGithub className="hover:text-gray-700" />
            </a>
            <a
              className="mx-2"
              href="https://www.linkedin.com/in/muqtadir-ahad/"
            >
              <AiFillLinkedin className="hover:text-blue-500" />
            </a>
            {/* <a className="m-1">
            <MdEmail />
          </a> */}
          </div>
          {/* Navigation */}
        </section>
        <section className="flex flex-col items-start bg-black lg:w-1/2 lg:h-full">
          {/* content */}
          <div
            id="About"
            className="flex items-center w-full h-full m-auto background-circles"
          >
            <div className="flex flex-col p-10 mx-4 text-white rounded-sm bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
              <h1 className="text-3xl font-normal ">
                {`Hi there, I'am Ahad - Software `}
                <span className="inline-block text-red-500">
                  <Typewriter
                    options={{
                      strings: [
                        "Engineer",
                        "Developer",
                        "Innovator",
                        "Creator",
                        "Enthusiast",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
              <p className="my-2 text-lg font-light leading-6 ">
                {`I'am a software engineering graduate from Fiji with a keen interest in learning
                and developing new and custom-made software. I have always been passionate about
                programming, innovation and always eager to learn and make a
                difference.`}
              </p>
              <div className="flex justify-start my-2">
                <a
                  className="p-2 font-normal border border-white rounded-sm hover:bg-red-500 hover:text-black hover:border-black"
                  href="CV.pdf"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
