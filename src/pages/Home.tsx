
// import AchievementsSection from "../components/Achievements_Componet"
import CirculatSkillsBar from "../components/CirculatSkillsBar"
import ContactComponent from "../components/contact"
import Copyright from "../components/CopyRight"
import HeroSection from "../components/HeroSection"
import NavBar from "../components/NavBar"
import ProjectShowcase from "../components/ProjectShowCase"


export const Home = () => {
    return <div className="bg-gray-900">
        <div>
            <NavBar />
        </div>
        <div>
            <HeroSection />
        </div>
        <div>
            <ProjectShowcase />
        </div >
        <div>
            <CirculatSkillsBar />
        </div >
        <div >
            <ContactComponent />
        </div >
        <div>
            <Copyright />
        </div >
    </div >
}