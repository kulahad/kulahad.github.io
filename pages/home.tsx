import React from "react";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Typewriter from "typewriter-effect";

export default function home() {

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
