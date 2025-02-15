import NavBar from "../components/NavBar"
import ProjectShowcase from "../components/ProjectShowCase"

export const ProjectPage = () => {
    return <div className="bg-slate-800">
        <div>
            <NavBar />
        </div>
        <div className="mt-17">

            <ProjectShowcase />
        </div>
    </div>
}