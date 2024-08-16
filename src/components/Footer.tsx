import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Greetings, SongsId } from "../application/Data";

function Footer() {
  const song = SongsId[Math.floor(Math.random() * SongsId.length)];
  return (
    <footer className="mt-auto bg-blackpx-8 text-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50">
      <div className="mx-auto px-5 container grid md:grid-cols-2 grid-cols-1 m-8">
        <div className="m-1 font-light">
          <div className="text-lg font-bold">
            Say{" "}
            <span className="inline-block text-red-700 ">
              <Typewriter
                options={{
                  strings: Greetings,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            !
          </div>
          <p className="mb-2">Jam to one of my favourites!</p>
          <iframe
            className=" mt-0"
            src={`https://open.spotify.com/embed/track/${song}?utm_source=generator`}
            width="75%"
            height="100"
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <p>Dont like this song? Refresh the page to get a new one.</p>
        </div>
        <div className="flex flex-col font-light text-lg">
          <div className="m-1 hover:animate-bounce">Email me</div>
          <div className="m-1 hover:animate-bounce">Checkout my Projects</div>
          <div className="m-1 hover:animate-bounce">Message me on Linkedin</div>
          <div className="m-1 hover:animate-bounce">
            Like my portfolio? - Leave a star on my github page
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;