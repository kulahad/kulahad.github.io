import NET from "vanta/dist/vanta.net.min";
import { useEffect, useRef, useState } from "react";
import Navbar from "../src/components/Navbar";
import Aboutme from "../src/components/Aboutme";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";

export default function NewHome() {
  const [vantaEffect, setVantaEffect] = useState<any>();
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
          scaleMobile: 1.0,
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
      <Hero />
      <Aboutme />
      <Footer />
    </main>
  );
}
