import Image from "next/image";
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center bg-white text-black dark:bg-[#1E1E1E] dark:text-white overflow-x-hidden" >
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}
