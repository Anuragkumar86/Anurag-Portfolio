import AchievementsSection from "../components/Achievements_Componet"
import NavBar from "../components/NavBar"

export const Achievement = () => {

    return <div>

    <div className="">
        <NavBar/>
    </div>
    
    <div className="bg-slate-900 min-h-screen mt-19">
        <AchievementsSection/>
    </div>
    </div>
}