 
import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/Landing";
import Navbar from "@/components/Navbar/Navbar";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import TeamSection from "@/components/TeamSection/TeamSection";
import { bitter } from "@/fonts/fonts"; 

export default function Home() {
  return (
    <div className={`${bitter.className}`}>
   <Navbar/>
   <Landing/>
   <AboutUsSection/>
   <ServicesSection/>
   <TeamSection/>
   <ContactUsSection/>
   <Footer/>
    </div>
  );
}
