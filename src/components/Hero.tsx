import Typewriter from "typewriter-effect";
import { SocialLinks } from "../application/Data";

function Hero() {
  return (
    <section className=" container flex h-screen items-center mx-auto bg-background-pattern">
      <div className="flex flex-col p-10 mx-4 text-white rounded-sm lg:w-2/3 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
        <h1 className="text-3xl font-normal ">
          <p className=" inline-block mr-2">Software </p>
          <span className="inline-block text-red-600">
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
        <p className="my-2 text-lg font-thin leading-6 ">
          Software Engineer, currently a Technical Consultant at DXC Technology,
          specializing in .NET, front-end tech, and cloud computing. Passionate
          about crafting innovative, custom solutions that push boundaries —
          from Microsoft D365 customizations to product development — I&apos;m
          always eager to learn and make a lasting impact in tech.
        </p>
        <div className="flex justify-start">
          <a
            className="p-2  font-light border border-white rounded-sm hover:bg-red-700 hover:border-black hover:text-black"
            rel="noopener"
            target="_blank"
            href={SocialLinks.find((x) => x.name === "LinkedIn")?.link}
          >
            Connect with me!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
