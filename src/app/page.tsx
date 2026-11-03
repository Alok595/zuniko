import { AboutFounder } from "@/components/about-founder";
import { Contact } from "@/components/contact";
import { Details } from "@/components/details";
import { FloatingSocial } from "@/components/floating-social";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Services } from "@/components/services";
import { Statement } from "@/components/statement";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Nav />
      {/* 6. WhatsApp and Insta button (persistent floating channel) */}
      <FloatingSocial />
      <main>
        <Hero />
        {/* 1. About Founder */}
        <AboutFounder />
        {/* 2. About Us */}
        <Statement />
        {/* 3. Our work */}
        <Work />
        {/* 4. Services offered */}
        <Services />
        {/* 7. Details */}
        <Details />
        {/* 5. Contact us (includes direct WhatsApp and Insta buttons) */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
