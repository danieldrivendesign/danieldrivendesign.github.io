export default function Resume() {
    return(
        <div className={"w-full h-dvh px-12 pb-24"}>
            <object className={" border-2 border-blue-300"} data="./files/Daniel_Andersen_Resume.pdf" type="application/pdf" width="100%" height="100%">
                <p>Open here <a href="./files/Daniel_Andersen_Resume.pdf"> if the PDF does not display.</a></p>
            </object>
        </div>
    )
}