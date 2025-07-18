import MarkdownRenderer from "./MarkdownRenderer.tsx";
import {useState} from "react";
import {useAllMarkdown} from "../../Hooks/useAllMarkdown.ts";
import {Post} from "../Interfaces/Post.ts";

export interface IBlogItem{
    name: string;
    content: string;
    slug: string;
}
export default function Blog() {
    const [selected, setSelected] = useState<Post | null>(null);
    const posts = useAllMarkdown();

    return (
        <div className={"pl-12 pr-12 h-full"}>
            <h1 className={"p-2"}>Blog</h1>
            {posts.map((post: Post) => (
                <section key={post.slug} onClick={() => setSelected(post)} className={"p-2 cursor-pointer underline"}>
                    <p id={post.slug}>- {post.slug.replace(/-/g, ' ')}</p>
                </section>
            ))}
            {selected && <MarkdownRenderer content={selected.content} />}
        </div>
    );
}
