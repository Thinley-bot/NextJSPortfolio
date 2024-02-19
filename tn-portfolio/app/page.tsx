import Homes from "@/app/Home/page";
import About from "@/app/About/page";
import Experiences from "@/app/Experiences/page";
import Skills from "@/app/Skills/page";
import Slider from "@/app/Clients/imageslider";
import Works from "@/app/Works/page";
import Testament from "@/app/Testament/page";
import ContactUs from "@/app/Contact/page";

export default function Home() {
  return (
    
        <div>
          <Homes />
          <About />
          <Experiences />
          <Skills />
          <Works/>
          <Slider/>
          <Testament/>
          <ContactUs/>
        </div>
    
    
       );
}
