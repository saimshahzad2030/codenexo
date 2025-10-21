 
import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
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
    </div>
  );
}
