import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { FloatingSocial } from "@/components/floating-social";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Process } from "@/components/process";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { Statement } from "@/components/statement";
import { Technology } from "@/components/technology";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Nav />
      <FloatingSocial />
      <main>
        <Hero />
        <Statement />
        <Services />
        <Work />
        <Process />
        <Technology />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
