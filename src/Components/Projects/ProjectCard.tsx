import {IProject} from "./IProject.tsx";
import EmbedVideo from "./EmbedVideo.tsx";

export function ProjectCard({project, projectCallback, isVideo}: {
    project: IProject,
    projectCallback: (project: IProject) => void,
    isVideo: boolean,
}) {

    return (
        <>
            <div
                className={"w-80 h-96 border border-cyan-400 rounded-md bg-cyan-900 flex flex-col items-center p-2 cursor-pointer"}
                onClick={() => projectCallback(project)}>
                <strong className={"w-full text-center text-lg"}>{project.name}</strong>
                <div className={`p-4 border-b border-t border-cyan-400 w-full h-64`}>
                    {isVideo ? <EmbedVideo source={project.image}/> :
                        <img className={"object-cover h-full"} src={project.image} alt={project.name}/>}
                </div>
                <p className={"w-full text-sm text-gray-400"}>{project.simpleDescription}</p>
            </div>
        </>
    )
}

