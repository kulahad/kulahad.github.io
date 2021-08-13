import React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { Chrono } from "react-chrono";

export default function home() {
  return (
    <main className="flex items-end w-screen h-screen lg:flex-col">
      <div className="relative flex w-full h-full ">
        <section className="absolute z-50 flex-col hidden bg-white lg:flex lg:w-1/2 lg:h-full font-secondary">
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
        <section className="ml-auto overflow-scroll bg-black no-scrollbar lg:h-full lg:w-1/2">
          {/* content */}
          <div
            id="About"
            className="flex items-center w-full h-full max-h-screen m-auto background-circles"
          >
            <div className="flex flex-col p-10 mx-4 text-white rounded-sm bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
              <h1 className="text-3xl font-normal ">
                {`Hi there 👋, I'am Ahad - Software `}
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
          <div
            id="Education"
            className="flex justify-center w-full py-10 m-auto lg:items-center lg:h-full background-contour"
          >
            <div className="flex flex-col p-10 mx-4 text-white rounded-sm bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
              <h1 className="py-2 my-2 text-4xl font-normal border-b border-white">
                Education 🎓
              </h1>

              <div className="m-1">
                <h1 className="py-2 my-2 text-xl font-normal border-b border-red-300 ">
                  Bachelor of Software Engineering: 2016 – 2019
                </h1>
                <h1 className="font-normal ">
                  The University of the South Pacific, Laucala Bay, Fiji Islands
                </h1>
                <h1 className="font-normal ">GPA – 3.54 </h1>
              </div>

              <div className="m-1">
                <h1 className="py-2 my-2 text-xl font-normal border-b border-red-300">
                  Secondary School: 2011 - 2015 Pundit Vishnu Deo Memorial
                  College
                </h1>
                <h1 className="font-normal ">
                  Saweni, Lautoka City, Fiji Islands
                </h1>
                <h1 className="font-normal ">
                  Tech-Science Student - Mathematics, English, Physics,
                  Technical Drawing, Computing Science{" "}
                </h1>
              </div>
              <div className="m-1">
                <h1 className="py-2 my-2 text-xl font-normal border-b border-red-300">
                  Primary School: 2002 - 2010 Gurukul Primary School
                </h1>
                <h1 className="font-normal ">
                  Saweni, Lautoka City, Fiji Islands
                </h1>
              </div>

              <h1 className="py-2 my-2 text-4xl font-normal border-b border-white">
                Achievements 🏆
              </h1>
              <div className="m-1">
                <h1 className="py-2 my-2 text-xl font-normal border-b border-red-300">
                  DUX Award – 2015
                </h1>
                <h1 className="font-normal ">Pundit Vishnu Deo Memorial</h1>
              </div>

              <div className="m-1">
                <h1 className="py-2 my-2 text-xl font-normal border-b border-red-300">
                  Outstanding student of the year (Year 12 – Form 6) – 2014
                </h1>
                <h1 className="font-normal ">Pundit Vishnu Deo Memorial</h1>
              </div>

              <div className="m-1">
                <h1 className="py-2 my-2 text-xl font-normal border-b border-red-300">
                  Outstanding student of the year (Year 11 – Form 5) – 2013
                </h1>
                <h1 className="font-normal ">Pundit Vishnu Deo Memorial</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
