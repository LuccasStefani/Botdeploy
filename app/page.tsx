'use client';

import Bento from "@/components/Bento";
import BotMilionCounter from "@/components/BotMilionCounter";
import BoxCta from "@/components/BoxCta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Metodo from "@/components/Metodo";
import { NavbarDemo } from "@/components/NavbarDemo";
import PoderSection from "@/components/PoderSection";
import { RoadMap } from "@/components/RoadMap";
import Rwa from "@/components/Rwa";
import GradualBlurMemo from "@/components/ui/GradualBlur";

export default function Home() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <div style={{ height: "100%", overflowY: "auto", paddingBottom: "6rem", position: "relative" }}>
        <main
          className="relative w-full min-h-screen md:px-52"
          style={{
            backgroundImage: "url('/bg-main.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "contain",
          }}
        >
          <NavbarDemo />
          <Hero />
          <BotMilionCounter />
          <Metodo />
          <Bento />
          <PoderSection />
          <RoadMap />
          <Rwa />
          <BoxCta />
          <Footer />
        </main>
      </div>
 
      <GradualBlurMemo
        target="page"
        position="bottom"
        height="4rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}
