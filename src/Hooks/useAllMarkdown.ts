import {useEffect, useState} from 'react';

export interface Post {
    slug: string;
    content: string;
}

export function useAllMarkdown(): Post[] {
    const [posts, setPosts] = useState<Post[]>([]);
    function toTitleCase(str: string): string {
        return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
    }

    useEffect(() => {
        const modules = import.meta.glob('../md/*.md', {query: '?raw', import: 'default'});
        Promise.all(
            Object.entries(modules).map(async ([path, resolver]) => {
                const content = await (resolver as () => Promise<string>)();
                const slugInitial = path
                    .split('/')
                    .pop()!
                    .replace('.md', '');
                const slug = toTitleCase(slugInitial);
                return {slug, content};
            })
        )
            .then(setPosts)
            .catch((err) => console.error('Failed loading md', err));
    }, []);

    return posts;
}
