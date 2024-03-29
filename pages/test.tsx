import Head from "next/head";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import NET from "vanta/dist/vanta.net.min";
import Typewriter from "typewriter-effect";
import { useEffect, useRef, useState } from "react";

export default function Home({ quote }: { quote: Api.QuoteResponse }) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff3f3f,
          backgroundColor: 0x0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <main className="flex flex-col w-screen h-screen bg-black " ref={myRef}>
      <div className="sticky z-50 bg-black border-b border-white bg-opacity-60">
        <nav className="container flex items-center justify-between w-screen h-12 mx-auto text-white ">
          <div className="mx-4">
            <p>Mohammed Ahad</p>
          </div>

          <div className="flex mx-4">
            <a className="mx-2 " href="mailto:mohammed.muqtadir.ahad@gmail.com">
              <MdEmail className="text-2xl hover:text-red-400" />
            </a>
            <a className="mx-2" href="https://github.com/kulahad">
              <AiFillGithub className="text-2xl hover:text-gray-700" />
            </a>
            <a
              className="mx-2"
              href="https://www.linkedin.com/in/muqtadir-ahad/"
            >
              <AiFillLinkedin className="text-2xl hover:text-blue-500" />
            </a>
            {/* <a className="m-1">
            <MdEmail />
          </a> */}
          </div>
        </nav>
      </div>
      <section className="container z-0 flex items-center mx-auto text-white"></section>
      <section className="container flex items-center w-full h-full mx-auto bg-background-pattern">
        <div className="flex flex-col p-10 mx-4 text-white rounded-sm lg:w-1/3 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
          <h1 className="text-3xl font-normal ">
            Software{" "}
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
          <p className="my-2 text-lg font-thin leading-6 ">
            Software Engineering graduate with a keen interest in learning and
            developing new and custom-made software. Passionate about
            programming and innovation, eager to learn and ready to make a
            difference.
          </p>
          <div className="flex justify-start">
            <a
              className="p-2 font-thin border border-white rounded-sm hover:bg-blue-600 hover:text-white"
              href="CV.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  try {
    const quote = await fetch("https://quotes.rest/qod").then((res) =>
      res.json()
    );

    return {
      props: {
        quote: quote,
      },
    };
  } catch (error) {
    return {
      props: {
        quote: null,
      },
    };
  }
}
