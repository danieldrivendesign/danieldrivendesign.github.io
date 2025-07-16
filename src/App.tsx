import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Personal from "./Components/PersonalInfo/Personal.tsx";
import MainCanvas from "./Components/MainCanvas.tsx";
import Intro from "./Components/PersonalInfo/Intro.tsx";
import ProjectList from "./Components/Projects/ProjectList.tsx";
import Socials from "./Components/PersonalInfo/Socials.tsx";
import DarkModeToggle from "./Components/DarkModeToggle.tsx";

function App() {
    function themeCallback() {
    }

    return (
        <div>
            <Router>
                <nav className={"pl-12 pr-12 flex text-center items-center justify-between"}>
                    <div className={"flex-shrink max-h-16 flex"}>
                        <Socials/>
                        <DarkModeToggle themeCallback={themeCallback}/>
                    </div>
                    <div className={"flex text-center items-center justify-evenly"}>
                        <Link className={"text-cyan-600 border-r border-cyan-400 px-2"} to="/">About</Link>
                        <Link className={"text-cyan-600 border-r border-cyan-400 px-2"}
                              to="/projects">Projects</Link>
                        {/*<Link className={"text-cyan-600 border-r border-cyan-400 px-2"} to="/contact">Contact</Link>*/}
                        <Link className={"text-cyan-600 px-2"} to="/just-bg">Show Background Only</Link>
                    </div>
                    <Link className={"text-white"} to="/">Daniel Andersen</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Personal/>}/>
                    <Route path="/about" element={<Intro/>}/>
                    <Route path="/projects" element={<ProjectList/>}/>
                    {/*<Route path="/contact" element={<Contact/>}/>*/}
                    <Route path="/just-bg" element={<></>}/>
                </Routes>
            </Router>
            <MainCanvas/>
        </div>
    )
}


export default App
