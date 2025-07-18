import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Personal from "./Components/PersonalInfo/Personal.tsx";
import MainCanvas from "./Components/MainCanvas.tsx";
import Intro from "./Components/PersonalInfo/Intro.tsx";
import ProjectList from "./Components/Projects/ProjectList.tsx";
import Socials from "./Components/PersonalInfo/Socials.tsx";
import DarkModeToggle from "./Components/DarkModeToggle.tsx";
import Resume from "./Components/PersonalInfo/Resume.tsx";
import Blog from "./Components/Blog/Blog.tsx";

function App() {
    function themeCallback() {
    }

    return (
        <div className={"h-dvh"}>
            <Router>
                <div className={"fixed pl-12 pr-12 w-full"}>
                    <nav
                        className={"grow flex text-center items-center justify-between bg-[#242424] border-b-2 border-blue-300 z-50"}>
                        <div className={"flex-shrink max-h-16 flex"}>
                            <Socials/>
                            <DarkModeToggle themeCallback={themeCallback}/>
                        </div>
                        <div className={"flex text-center items-center justify-evenly "}>
                            <Link className={"text-cyan-600 border-r border-cyan-400 px-2"} to="/">About</Link>
                            <Link className={"text-cyan-600 border-r border-cyan-400 px-2"}
                                  to="/projects">Projects</Link>
                            {/*<Link className={"text-cyan-600 border-r border-cyan-400 px-2"} to="/resume">Resume</Link>*/}
                            <Link className={"text-cyan-600 border-r border-cyan-400 px-2"} to="/blog">Blog</Link>
                            <Link className={"text-cyan-600 px-2"} to="/just-bg">Show Background Only</Link>
                        </div>
                        <Link className={"text-white"} to="/">Daniel Andersen</Link>
                    </nav>
                </div>
                <div className={"flex flex-col pt-12 h-full"}>
                    <Routes>
                        <Route path="/" element={<Personal/>}/>
                        <Route path="/about" element={<Intro/>}/>
                        <Route path="/projects" element={<ProjectList/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/just-bg" element={<></>}/>
                    </Routes>
                </div>
            </Router>
            <MainCanvas/>
        </div>
    )
}


export default App
