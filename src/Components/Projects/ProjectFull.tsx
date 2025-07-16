import {IProject} from "./IProject.tsx";
import {useRef} from "react";
import {useOutsideClick} from "../../Hooks/UseOutsideClick.ts";
import {CloseArrow} from "../Assets/Svgs.tsx";
import EmbedVideo from "./EmbedVideo.tsx";

export interface IProjectFull {
    isOpen: boolean,
    project: IProject | null,
    onClose: () => void,
    isVideo: boolean,
}

export default function ProjectFull({isOpen, project, onClose, isVideo}: IProjectFull) {
    const panelRef = useRef<HTMLDivElement>(null);
    useOutsideClick(panelRef, onClose, isOpen);

    const slideClasses = isOpen ? 'translate-x-0' : 'translate-x-full';
    const backdropClasses = isOpen
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none';

    return (
        <>
            <div className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-700 ${backdropClasses}`}
                 onClick={onClose}/>

            <aside
                className={`fixed p-12 w-2/3 h-full right-0 top-0 z-50 flex flex-col items-center shadow-lg transition-transform duration-700 ease-out ${slideClasses}`}>
                <div
                    className={`flex items-start justify-stretch border border-cyan-400 bg-cyan-900 h-full w-full rounded-l-md`}
                    ref={panelRef}>
                    <button onClick={onClose}>
                        <CloseArrow/>
                    </button>
                    <div className="grow flex flex-col p-6 space-y-4">
                        <h1 className="text-xl text-center font-semibold">{project?.name}</h1>
                        <div className="rounded-md w-full">
                            {isVideo ? <EmbedVideo source={project?.image ?? ""}/> :
                                <img className={"w-full object-contain h-96"} src={project?.image} alt={project?.name}/>}
                        </div>
                        <p className="text-sm text-gray-400">{project?.description}</p>
                        <a href={project?.link}>Github: {project?.name}</a>
                    </div>
                </div>
            </aside>
        </>
    );
}