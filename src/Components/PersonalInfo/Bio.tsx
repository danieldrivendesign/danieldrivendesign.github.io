export default function Bio() {
    return (
        <>
            <div className={"font-mono"}>
                <div
                    className={`p-4 rounded-md dark:bg-cyan-950/95 bg-cyan-300/90 text-justify dark:text-shadow-dark text-shadow-light`}>
                    <p>
                        I am a software developer based in Fort Worth, Texas.
                    </p>
                    <p className={"font-bold py-4"}>Career:</p>
                    <p>
                        I write C# for a living and as a hobby. Currently I have been working as a Software Engineer for
                        over a year. I handle all kinds of software development tasks from a variety of clients, such as
                        building backend APIs, creating webpages with React and Typescript, and even developing PLC
                        controls using Python for industrial automation. I love taking on new challenges and learning as
                        much as I can. So far, nothing has been as rewarding as being an engineer!
                        <br/>
                        Before this, I worked in IT primarily as a
                        Systems Administrator for 7 years building servers, automating processes, and implementing
                        security features. Being in IT has been a blessing as well, allowing me to confidently tackle
                        both hardware and software related tasks.
                    </p>
                    <p className={"font-bold py-4"}>Personal:</p>
                    <p>
                        I enjoy working on indie games, as well as creating tools related to game development.
                        Currently I'm working on a framework to create turn-based RPGs with data-driven skills / stats /
                        etc.
                        This project involves architecting modular combat systems, editor tooling, and data-driven
                        pipelines in
                        Unity so I can iterate fast. These projects require constant changes,
                        so I spend a lot of free time research best practices, design patterns, and other ways to
                        make my code more modular and maintainable.
                    </p>
                    <p>
                        Aside from game development, I enjoy other tech related hobbies like playing around with Arduino
                        projects, 3D printing.
                    </p>
                    <p>
                        For non-tech hobbies, I have also been skateboarding for about 15 years.
                    </p>
                    <p>
                        I like clean, predictable, and modular code. If you're looking for a detail-oriented developer,
                        then please feel free to get in touch!
                    </p>
                </div>
            </div>
        </>
    )
}