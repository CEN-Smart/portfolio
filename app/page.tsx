import About from "@/components/About";
import Contact from "@/components/Contact";
import Fact from "@/components/Fact";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import Profile from "@/components/Profile";
import Resume from "@/components/Resume";
import Service from "@/components/Service";
import SkillSet from "@/components/Skill";


export default function Homepage() {
  return (
    <main>
      <Profile />
      <About/>
      <Fact/>
      <SkillSet/>
      <Resume/>
      <Portfolio/>
      <Service/>
      <Contact/>
      <Footer/>
    </main>
  );
}
