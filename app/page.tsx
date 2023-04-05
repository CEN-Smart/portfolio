import About from "@/components/About";
import Fact from "@/components/Fact";
import Portfolio from "@/components/Portfolio";
import Profile from "@/components/Profile";
import Resume from "@/components/Resume";
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
    </main>
  );
}
