import Intro from "./Intro.tsx";
import Bio from "./Bio.tsx";
import Skills from "./Skills.tsx";

export default function Personal() {
    return (
        <div className="flex justify-center w-full text-black dark:text-white overflow-hidden h-full">
            <div className={"flex-grow h-full"}>
                <div className={"flex grow justify-between p-4 gap-10 h-full"}>
                    <div className={"flex flex-col grow gap-10 h-1/2"}>
                        <Intro/>
                        <Skills/>
                    </div>
                    <div
                        className={"w-2/3 justify-center items-center dark:bg-cyan-950/95 bg-cyan-300/90 rounded-md"}>
                        <Bio/>
                    </div>

                </div>
            </div>
        </div>
    )
}