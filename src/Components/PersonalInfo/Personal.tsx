import Intro from "./Intro.tsx";
import Bio from "./Bio.tsx";
import Skills from "./Skills.tsx";

export default function Personal() {
    return (
        <div className="flex justify-center w-full text-black dark:text-white overflow-hidden">
            <div className={"pl-12 pr-12 flex-grow"}>
                <div className={"grow justify-between h-1/2 p-4 gap-10"}>
                    <Intro/>
                    <div className={"flex gap-10 "}>
                        <Bio/>
                        <Skills/>
                    </div>
                </div>
            </div>
        </div>
    )
}