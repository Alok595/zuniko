import { AboutFounder } from "@/components/about-founder";
import { Contact } from "@/components/contact";
import { Details } from "@/components/details";
import { FloatingSocial } from "@/components/floating-social";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Nav } from "@/components/nav";
import { Services } from "@/components/services";
import { Statement } from "@/components/statement";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Nav />
      <FloatingSocial />
      <main>
        {/* Cobalt Drawing Sheet Hero with interactive ruler & 3D floating stage */}
        <Hero />

        {/* Studio Marquee */}
        <Marquee />

        {/* 1. About Founder */}
        <AboutFounder />

        {/* 2. About Us */}
        <Statement />

        {/* 3. Our work */}
        <Work />

        {/* 4. Services offered */}
        <Services />

        {/* 5. Contact us */}
        <Contact />

        {/* 6. Details with Tech Stack */}
        <Details />
      </main>
      <Footer />
    </>
  );
}
