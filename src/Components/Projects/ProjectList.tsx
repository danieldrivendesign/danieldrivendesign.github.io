import {useState} from "react";
import {ProjectCard} from "./ProjectCard.tsx";
import {IProject} from "./IProject.tsx";
import ProjectFull from "./ProjectFull.tsx";
import {useProjectSidebar} from "../../Hooks/UseOutsideClick.ts";

export default function ProjectList() {
    const [projects] = useState<IProject[]>([
            {
                name: "Unity Setup Automator",
                description: "The Setup Automator is a Unity editor window that allows users to automatically import assets, packages, and git repos.",
                simpleDescription: "Automatically import assets, packages, and git repos into Unity.",
                image: "./vid/SetupAutomator.mp4",
                link: "https://github.com/danieldrivendesign/SetupAutomator"
            },
            {
                name: "Level Node Editor",
                description: "This is a simple to use level node editor built with React and ReactFlow. Users can define scenes or levels, and add entrances and exits to connect more levels. The data can then be exported to json so the user can import the data to any engine.",
                simpleDescription: "Define scenes or levels, and add links to other scenes. Data can be exported for use in any engine.",
                image: "./vid/LevelNodeEditor.mp4",
                link: "https://github.com/danieldrivendesign/game-node-project"
            }
        ]
    )
    const {selected, isOpen, open, close} = useProjectSidebar();

    function checkFileExtension(file: string){
        const extension = file.split('.')
        console.log(extension);
        const ext = extension.pop()
        if(ext === 'mp4'){
            return true;
        }
        return false;
    }
    return (
        <>
            <div className={"flex flex-wrap justify-center w-full h-1/2 gap-5 pt-2"}>
                {projects.map((project) => <ProjectCard project={project} projectCallback={(p) => open(p)}
                                                        key={project.name} isVideo={checkFileExtension(project.image)}/>)}
            </div>
            {selected && (
                <ProjectFull
                    isOpen={isOpen}
                    project={selected}
                    onClose={close}
                    isVideo={checkFileExtension(selected.image)}
                />
            )}
        </>
    )
}