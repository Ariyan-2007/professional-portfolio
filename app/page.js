import Nav from "../components/Nav";
import Hero from "../components/Hero";
import CareerLog from "../components/CareerLog";
import Skills from "../components/Skills";
import EducationAwards from "../components/EducationAwards";
import Publications from "../components/Publications";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CareerLog />
        <Skills />
        <EducationAwards />
        <Publications />
      </main>
      <Contact />
    </>
  );
}
