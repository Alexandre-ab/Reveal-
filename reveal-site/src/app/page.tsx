import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Preloader />
      <Header />
      <ScrollToTop />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Services />
        <Team />
        <Gallery />
        <Marquee direction="right" />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
