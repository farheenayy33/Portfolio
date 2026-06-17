import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { OpenSource } from "@/components/sections/OpenSource";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Projects />
      <OpenSource />
      <About />
      <Contact />
    </main>
  );
}
