import About from "@/components/About";
import Fact from "@/components/Fact";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import SkillSet from "@/components/Skill";


export default function Homepage() {
  return (
    <div>
      <header className='bg-img h-screen relative w-full overflow-y-hidden'>
      <Navbar />
      <Profile />
      </header>
      <About/>
      <Fact/>
      <SkillSet/>
    </div>
  );
}
