import Contact from "./_components/Contact";
import FAQ from "./_components/FAQ";
import Hero from "./_components/Hero";
import Pricing from "./_components/Pricing";
import Services from "./_components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
