import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProblemSolving from "@/components/ProblemSolving";
import Projects from "@/components/Projects";
import RevealOnScroll from "@/components/RevealOnScroll";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RevealOnScroll><About /></RevealOnScroll>
        <RevealOnScroll><Skills /></RevealOnScroll>
        <RevealOnScroll><Experience /></RevealOnScroll>
        <RevealOnScroll><Projects /></RevealOnScroll>
        <RevealOnScroll><ProblemSolving /></RevealOnScroll>
        <RevealOnScroll><Contact /></RevealOnScroll>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
