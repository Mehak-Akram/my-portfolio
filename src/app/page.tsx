import Header from "@/components/header/Header";
import HeroSection from "@/components/herosection/HeroSection";
import AboutSection from "@/components/about-section/AboutSection";
import AboutBottomImage from "@/components/about-bottom-image/AboutBottomImage";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/services/Services";
import ContactUs from "@/components/contact-us/ContactUs";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
   <>
   <Header/>
   <HeroSection/>
    <AboutSection/>
   <AboutBottomImage/>
   <Portfolio/>
   <Services/>
   <ContactUs/>
   <Footer/>
   </>
  );
}
