import {Github, Linkedin} from "../Assets/Svgs.tsx";

export default function Socials() {
    return (
        <>
            <div>
                <div className={"p-1 flex justify-start"}>
                    <Github url={"https://github.com/danieldrivendesign"}/>
                    <Linkedin url={'https://www.linkedin.com/in/daniel-andersen-dev'}/>
                    {/*<Twitter url={"https://google.com"}/>*/}
                    {/*<FaceBook url={"https://facebook.com"}/>*/}
                </div>
            </div>

        </>
    )
}