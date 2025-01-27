import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Resume />
    <Projects />
    <Contact />
    </>
  );
}
