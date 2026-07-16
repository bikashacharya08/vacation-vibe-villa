import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import EthicalSafari from "@/components/EthicalSafari";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <EthicalSafari />
        <Amenities />
        <Gallery />
        <Booking />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
