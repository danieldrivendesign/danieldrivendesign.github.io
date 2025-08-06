
export default function Intro() {
    return (
        <>
            <div className={"flex flex-col font-mono flex-shrink gap-4 dark:bg-cyan-950/95 bg-cyan-300/90 rounded-md"}>
                <div
                    className={"flex-shrink p-4 text-xl"}>
                    <h2 className={'dark:text-shadow-dark text-shadow-light shadow-[#ffffff] dark:shadow-[#000000]'}>Hello,</h2>
                    <h3 className={'dark:text-shadow-dark text-shadow-light shadow-[#ffffff] dark:shadow-[#000000]'}>My name is Daniel</h3>
                </div>
            </div>
        </>
    )
}