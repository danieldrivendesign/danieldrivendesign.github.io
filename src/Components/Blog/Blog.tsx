import MarkdownRenderer from "./MarkdownRenderer.tsx";
import {useEffect, useState} from "react";
import {useAllMarkdown} from "../../Hooks/useAllMarkdown.ts";
import {Post} from "../Interfaces/Post.ts";

export interface IBlogItem {
    name: string;
    content: string;
    slug: string;
}

export default function Blog() {
    const [selected, setSelected] = useState<Post | null>(null);
    const posts = useAllMarkdown();

    useEffect(() => {
        setSelected(posts[0]);
    }, [posts]);

    return (
        <>
            <div className={"p-2 flex gap-40 h-full "}>
                <div className={'bg-[#242424] rounded-md w-1/4'}>
                    <h1 className={"p-2 "}>Blog</h1>
                    {posts.map((post: Post) => (
                        <section key={post.slug} onClick={() => setSelected(post)}
                                 className={"p-2 cursor-pointer underline"}>
                            <p id={post.slug}>- {post.slug.replace(/-/g, ' ')}</p>
                        </section>
                    ))}
                </div>
                <div className={"max-h-screen py-2 pr-2 w-3/4"}>
                    <div
                        className="dark:bg-cyan-950/95 bg-cyan-300/90 rounded-md border-2 border-blue-300 overflow-auto h-[99%]">
                        {selected && <MarkdownRenderer content={selected.content}/>}
                    </div>
                </div>
            </div>
        </>
    );
}
