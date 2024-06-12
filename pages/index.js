import Navigation from "./Components/Navigation";
import Section from "./Components/Section";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Quality from "./Components/Quality";
import About from "./About";
import ContactSection from  "./Components/ContactSection";

export default function Home() {
  return (
  <>
  <Navigation/> 
  <Section/>    
  <About/> 
  <Services/>
  <Quality/>
  <ContactSection/>
  <Footer/>
  </>
  );
}
 