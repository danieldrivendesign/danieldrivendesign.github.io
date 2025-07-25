export default function Intro() {
    const darkToggleClass = "shadow-[#ffffff] dark:shadow-[#000000]"
    return (
        <>
            <div className={"flex flex-col font-mono flex-shrink"}>
                <div className={"flex-shrink p-4"}>
                    <h1 className={`dark:text-shadow-dark text-shadow-light ${darkToggleClass}`}>Hello, my name is </h1>
                    <h1 className={"font-bold underline indent-72"}><span
                        className={`dark:text-shadow-dark text-shadow-light ${darkToggleClass}`}> Daniel </span></h1>
                </div>
            </div>
        </>
    )
}