 
import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import Landing from "@/components/Landing/Landing";
import Navbar from "@/components/Navbar/Navbar";
import { bitter } from "@/fonts/fonts"; 

export default function Home() {
  return (
    <div className={`${bitter.className}`}>
   <Navbar/>
   <Landing/>
   <AboutUsSection/>
    </div>
  );
}
