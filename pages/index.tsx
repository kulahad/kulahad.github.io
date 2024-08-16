import NET from "vanta/dist/vanta.net.min";
import Typewriter from "typewriter-effect";
import { useEffect, useRef, useState } from "react";
import Navbar from "../src/components/Navbar";
import Image from "next/image";
import EducationCard from "../src/components/EducationCard";
import TimelineItem from "../src/components/TimelineItem";
import Aboutme from "../src/components/Aboutme";
import Footer from "../src/components/Footer";

export default function NewHome() {
  const [vantaEffect, setVantaEffect] = useState();
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 150.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 2.0,
          color: 0xb91c1c,
          backgroundColor: 0x0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <main className="flex flex-col bg-black" ref={myRef}>
      <Navbar />
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
            Software Engineer, currently a Technical Consultant at DXC
            Technology, specializing in .NET, front-end tech, and cloud
            computing. Passionate about crafting innovative, custom solutions
            that push boundaries — from Microsoft D365 customizations to product
            development — I&apos;m always eager to learn and make a lasting
            impact in tech.
          </p>
          <div className="flex justify-start">
            <a
              className="p-2  font-light border border-white rounded-sm hover:bg-red-700 hover:border-black hover:text-black"
              href="CV.pdf"
            >
              Connect with me!
            </a>
          </div>
        </div>
      </section>

      {/* About me */}
      <Aboutme />
      <Footer />
    </main>
  );
}
