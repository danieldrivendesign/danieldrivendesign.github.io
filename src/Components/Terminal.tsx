export default function Terminal({currentRoute}: {currentRoute: string}){
    return(
        <div className={'flex items-center'}>
            <div className={"rounded-md"}>
                <code className={"text-green-500"}> {'user@danieldrivendesign.com:'}
                    <span className={"text-blue-600"}>/var/www/</span>
                    <span className={"text-white"}>{"$ "}</span>
                    <span className={"text-white"}>{`.${currentRoute}`}</span>
                    <span className={"text-white animate-blink"}>|</span>
                </code>
            </div>
        </div>
    )
}