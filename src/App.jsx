import AboutUs from "./components/AboutUs";
import ContactSection from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Gallery from "./components/Gallary";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonial";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <AboutUs/>
     <Gallery/>
     <FAQ/>
     <Testimonials/>
     <ContactSection/>
     <Footer/>
    </>
  );
}

export default App;
