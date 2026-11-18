import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Featured } from "@/components/sections/Featured";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { Visit } from "@/components/sections/Visit";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Featured />
      <MenuPreview />
      <Visit />
      <Faq />
      <Contact />
      <CtaBand />
    </>
  );
}
