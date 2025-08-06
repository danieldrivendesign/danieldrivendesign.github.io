import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Personal from "./Components/PersonalInfo/Personal.tsx";
import MainCanvas from "./Components/MainCanvas.tsx";
import ProjectList from "./Components/Projects/ProjectList.tsx";
import Socials from "./Components/PersonalInfo/Socials.tsx";
import DarkModeToggle from "./Components/DarkModeToggle.tsx";
import Resume from "./Components/PersonalInfo/Resume.tsx";
import Blog from "./Components/Blog/Blog.tsx";
import {useState} from "react";
import Terminal from "./Components/Terminal.tsx";

function App() {
    function themeCallback() {
    }

    const [currentRoute, setRoute] = useState(window.location.pathname);

    function OnNavClick(location: string) {
        setRoute(location);
    }

    return (
        <div className={"h-dvh"}>
            <Router>
                <div className={"fixed pl-12 pr-12 w-full z-50"}>
                    <div className={"bg-[#242424] border-b-2 border-blue-300"}>
                        <nav
                            className={"grow flex text-center items-center justify-between "}>
                            <div className={"max-h-16 flex"}>
                                <Socials/>
                                <DarkModeToggle themeCallback={themeCallback}/>
                            </div>
                            <div className={"flex text-center items-center"}>
                                <Link className={"text-cyan-600 border-r border-cyan-400 px-2"} to="/"
                                      onClick={() => OnNavClick("/about")}>About</Link>
                                <Link className={"text-cyan-600 border-r border-cyan-400 px-2"}
                                      to="/projects" onClick={() => OnNavClick("/projects")}>Projects</Link>
                                <Link className={"text-cyan-600 border-r border-cyan-400 px-2"} to="/blog"
                                      onClick={() => OnNavClick("/blog")}>Blog</Link>
                                <Link className={"text-cyan-600 px-2"} to="/background"
                                      onClick={() => OnNavClick("/background")}>Show Background</Link>
                            </div>

                            <Link className={"text-white"} to="/">Daniel Andersen</Link>
                        </nav>
                    </div>
                </div>

                <div className={"flex flex-col p-12 h-screen overflow-hidden"}>
                    <Routes>
                        <Route path="/" element={<Personal/>}/>
                        <Route path="/projects" element={<ProjectList/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/background" element={<></>}/>
                    </Routes>
                </div>
            </Router>
            <MainCanvas/>
            <div className={"fixed w-full grid grid-cols-3 bottom-6 z-50"}>
                <div className={"col-start-2 pl-24"}>
                <Terminal currentRoute={currentRoute}/>
                </div>
            </div>
        </div>
    )
}


export default App
