import React, { useRef, MutableRefObject } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import Head from "next/head";

export default function Home() {
  const aboutSection: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const educationSection: MutableRefObject<HTMLDivElement | null> =
    useRef(null);
  const experienceSection: MutableRefObject<HTMLDivElement | null> =
    useRef(null);
  const technologiesSection: MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  function scrollToSection(
    sectionRef: MutableRefObject<HTMLDivElement | null>
  ) {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <main className="flex items-end w-screen h-screen lg:flex-col">
      <Head>
        <title>{`Ahad's Portfolio`}</title>
      </Head>
      <div className="relative flex w-full h-full ">
        <section className="absolute z-50 flex-col hidden bg-white lg:flex lg:w-1/2 lg:h-full font-secondary">
          <div className="m-4 ">
            <p className="inline p-2 text-lg font-semibold text-white bg-black hover:bg-white hover:text-red-600">
              Mohammed Ahad
            </p>
          </div>

          <div className="flex flex-col m-auto">
            <h1
              className="navigation-item "
              onClick={() => {
                scrollToSection(aboutSection);
              }}
            >
              About <span className="text-white">me</span>
            </h1>
            <h1
              className="navigation-item"
              onClick={() => {
                scrollToSection(educationSection);
              }}
            >
              Education
            </h1>
            <h1
              className="navigation-item"
              onClick={() => {
                scrollToSection(experienceSection);
              }}
            >
              Experience
            </h1>
            <h1
              className="navigation-item"
              onClick={() => {
                scrollToSection(technologiesSection);
              }}
            >
              Technologies
            </h1>
            <h1 className="navigation-item ">
              Projects
              <span className="mx-2 text-2xl text-white">Coming Soon</span>
            </h1>
          </div>
          <div className="flex items-center justify-between w-full ">
            <div className="mx-4 text-gray-700 text-normal">
              Made with NextJS and Tailwind CSS by Kulahad❤️❤️❤️
            </div>
            <div className="flex p-4 text-4xl">
              <a
                className="mx-2 "
                href="mailto:mohammed.muqtadir.ahad@gmail.com"
              >
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
            </div>
            {/* <a className="m-1">
            <MdEmail />
          </a> */}
          </div>
          {/* Navigation */}
        </section>
        <section className="ml-auto overflow-scroll bg-black no-scrollbar lg:h-full lg:w-1/2">
          {/* content */}
          <div
            ref={aboutSection}
            onScroll={() => {
              scrollToSection(educationSection);
            }}
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
              <p className="my-1 lg:hidden">Get in touch with me.</p>
              <div className="flex text-4xl lg:hidden">
                <a
                  className="mr-2 "
                  href="mailto:mohammed.muqtadir.ahad@gmail.com"
                >
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
              <div>
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1306585441&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-14790367" title="Kulahad" target="_blank" style="color: #cccccc; text-decoration: none;">Kulahad</a> · <a href="https://soundcloud.com/user-14790367/sets/programming-with-chill-vibes" title="Programming with Chill Vibes" target="_blank" style="color: #cccccc; text-decoration: none;">Programming with Chill Vibes</a></div>
              </div>
            </div>
          </div>
          <div
            ref={educationSection}
            id="Education"
            className="flex justify-center w-full py-10 m-auto lg:items-center lg:h-full background-contour"
          >
            <div className="flex flex-col p-10 mx-4 text-white rounded-sm bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
              <p className="py-2 my-2 text-4xl font-normal border-b border-white">
                Education 🎓
              </p>

              <div className="m-1">
                <p className="py-2 my-2 text-xl font-normal border-b border-red-300 ">
                  Bachelor of Software Engineering: 2016 – 2019
                </p>
                <p className="font-normal ">
                  The University of the South Pacific, Laucala Bay, Fiji Islands
                </p>
                <p className="font-normal ">GPA – 3.54 </p>
              </div>

              <div className="m-1">
                <p className="py-2 my-2 text-xl font-normal border-b border-red-300">
                  Secondary School: 2011 - 2015 Pundit Vishnu Deo Memorial
                  College
                </p>
                <p className="font-normal ">
                  Saweni, Lautoka City, Fiji Islands
                </p>
                <p className="font-normal ">
                  Tech-Science Student - Mathematics, English, Physics,
                  Technical Drawing, Computing Science{" "}
                </p>
              </div>
              <div className="m-1">
                <p className="py-2 my-2 text-xl font-normal border-b border-red-300">
                  Primary School: 2002 - 2010 Gurukul Primary School
                </p>
                <p className="font-normal ">
                  Saweni, Lautoka City, Fiji Islands
                </p>
              </div>

              <p className="py-2 my-2 text-4xl font-normal border-b border-white">
                Achievements 🏆
              </p>
              <div className="m-1">
                <p className="py-2 my-2 text-xl font-normal border-b border-red-300">
                  DUX Award – 2015
                </p>
                <p className="font-normal ">Pundit Vishnu Deo Memorial</p>
              </div>

              <div className="m-1">
                <p className="py-2 my-2 text-xl font-normal border-b border-red-300">
                  Outstanding student of the year (Year 12 – Form 6) – 2014
                </p>
                <p className="font-normal ">Pundit Vishnu Deo Memorial</p>
              </div>

              <div className="m-1">
                <p className="py-2 my-2 text-xl font-normal border-b border-red-300">
                  Outstanding student of the year (Year 11 – Form 5) – 2013
                </p>
                <p className="font-normal ">Pundit Vishnu Deo Memorial</p>
              </div>
            </div>
          </div>

          <div
            ref={experienceSection}
            id="Experience"
            className="flex justify-center w-full py-10 m-auto lg:items-center lg:h-full background-sprinkle"
          >
            <div className="flex flex-col p-10 mx-4 text-white rounded-sm bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
              <p className="py-2 my-1 text-4xl font-normal border-b border-white">
                Experience ⚙️
              </p>

              <div className="m-1">
                <div className="py-2 my-2 text-xl font-normal border-b border-red-300 ">
                  Open Educational Resources Technologist
                  <p className="font-normal ">
                    Centre for Learning & Teaching Enhancement - 09/2020 -
                    Current
                  </p>
                </div>
                <p className="font-normal ">
                  Fiji National University, Nasinu, Suva, Fiji Islands
                </p>
                <ul className="font-normal ">
                  <li>
                    • Develop educational and custom applications to assist
                    students and staff.
                  </li>
                  <li>• Graphic design, Video editing</li>
                </ul>
              </div>

              <div className="m-1">
                <div className="py-2 my-2 text-xl font-normal border-b border-red-300 ">
                  Developer – Technical Department
                  <p className="font-normal ">
                    QIT Pacific - 06/2020 - 09/2020
                  </p>
                </div>
                <p className="font-normal ">Sports City, Suva, Fiji Islands</p>
                <ul className="font-normal ">
                  <li>• Develop software solutions for local clients.</li>
                  <li>• Requirements engineering and analysis.</li>
                </ul>
              </div>

              <div className="m-1">
                <div className="py-2 my-2 text-xl font-normal border-b border-red-300 ">
                  Graduate Developer – Technical Services
                  <p className="font-normal ">Acton Fiji - 11/2019 - 05/2020</p>
                </div>
                <p className="font-normal ">
                  30 Desvoux Road, Suva, Fiji Islands
                </p>
                <ul className="font-normal ">
                  <li>
                    • Out sourced work for Akari Software, Ireland. Full-stack
                    development.
                  </li>
                  <li>• Representing the team in meetings.</li>
                </ul>
              </div>

              <div className="m-1">
                <div className="py-2 my-2 text-xl font-normal border-b border-red-300 ">
                  IT Intern
                  <p className="font-normal ">
                    IT Department- 06/2016 - 02/2018
                  </p>
                </div>
                <p className="font-normal ">
                  The University of the South Pacific, Laucala Bay, Fiji Islands
                </p>
                <ul className="font-normal ">
                  <li>
                    • Configuration of Software and firmware on new students’
                    PCs, Lab monitoring and care.
                  </li>
                  <li>
                    • Logging requests to various technicians, Closing Labs
                    after hours
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            ref={technologiesSection}
            id="Technologies"
            className="flex justify-center w-full py-10 m-auto lg:items-center lg:h-full background-meteor"
          >
            <div className="flex flex-col p-10 mx-4 text-white rounded-sm bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
              <p className="py-2 my-1 text-4xl font-normal border-b border-white">
                Technologies 👨‍💻
              </p>

              <div className="">
                <div className="py-2 my-2 text-xl font-normal border-b border-red-300 ">
                  Programming Languages
                </div>
                <div className="flex flex-wrap items-center my-2">
                  <p>Android Java</p>
                  <i className="dev-icon devicon-android-plain colored"></i>
                </div>
                <div className="flex flex-wrap items-center my-2">
                  <p>ASP.NET, Entity Framework, Web API 2, LINQ</p>
                  <i className="dev-icon devicon-dot-net-plain-wordmark colored"></i>
                </div>
                <div className="flex flex-wrap items-center my-2">
                  <p>C#</p>
                  <i className="dev-icon devicon-csharp-plain-wordmark colored"></i>
                </div>
                <div className="flex flex-wrap items-center my-2">
                  <p>Java</p>
                  <i className="dev-icon devicon-java-plain colored"></i>
                </div>
                <div className="flex flex-wrap items-center my-2">
                  <p>JavaScript</p>
                  <i className="dev-icon devicon-javascript-plain colored"></i>
                  <p>TypeScript</p>
                  <i className="dev-icon devicon-typescript-plain colored"></i>
                  <p>JQuery</p>
                  <i className="dev-icon devicon-jquery-plain-wordmark colored"></i>
                  <p>NodeJS</p>
                  <i className="dev-icon devicon-nodejs-plain-wordmark colored"></i>
                </div>
                <div className="py-2 my-2 text-xl font-normal border-b border-red-300 ">
                  Frontend and Styling
                </div>
                <div className="flex flex-wrap items-center my-2">
                  <p>HTML</p>
                  <i className="dev-icon devicon-html5-plain-wordmark colored"></i>
                  <p>CSS</p>
                  <i className="dev-icon devicon-css3-plain-wordmark colored"></i>
                  <p>Bootstrap</p>
                  <i className="dev-icon devicon-bootstrap-plain-wordmark colored"></i>
                  <p>Tailwind CSS</p>
                  <i className="dev-icon devicon-tailwindcss-original-wordmark colored"></i>
                </div>
                <div className="py-2 my-2 text-xl font-normal border-b border-red-300 ">
                  Frameworks - Backend and Frontend
                </div>
                <div className="flex flex-wrap items-center my-2">
                  <p>Vue</p>
                  <i className="dev-icon devicon-vuejs-plain-wordmark colored"></i>
                  <p>React</p>
                  <i className="dev-icon devicon-react-original colored"></i>
                  <p>NextJS</p>
                  <i className="dev-icon devicon-nextjs-original-wordmark"></i>
                  <p>NestJS</p>
                  <i className="dev-icon devicon-nestjs-plain-wordmark colored"></i>
                </div>

                <div className="py-2 my-2 text-xl font-normal border-b border-red-300 ">
                  Databases
                </div>
                <div className="flex flex-wrap items-center my-2">
                  <p>MySQL</p>
                  <i className="dev-icon devicon-mysql-plain-wordmark colored"></i>
                  <p>Oracle</p>
                  <i className="dev-icon devicon-oracle-original colored"></i>
                  <p>MongoDB</p>
                  <i className="dev-icon devicon-mongodb-plain-wordmark colored"></i>
                </div>
                <div className="py-2 my-2 text-xl font-normal border-b border-red-300 ">
                  Source Control Services
                </div>
                <div className="flex flex-wrap items-center my-2">
                  <p>Git</p>
                  <i className="dev-icon devicon-git-plain-wordmark colored"></i>
                  <p>GitHub</p>
                  <i className="dev-icon devicon-github-original-wordmark"></i>
                  <p>Bitbucket</p>
                  <i className="dev-icon devicon-bitbucket-original-wordmark colored"></i>
                </div>
                <div className="py-2 my-2 text-xl font-normal border-b border-red-300 ">
                  UX/UI Designing
                </div>
                <div className="flex flex-wrap items-center my-2">
                  <p>Figma</p>
                  <i className="dev-icon devicon-figma-plain colored"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
