import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism'

export type MarkdownRendererProps = {
    content: string;
};

export default function MarkdownRenderer({content}: MarkdownRendererProps) {
    return (
        <div className="absolute top-14 right-14 p-4 bg-cyan-900/95 rounded-md">
            <Markdown
                remarkPlugins={[remarkGfm]}
                children={content}
                components={{
                    code(props) {
                        const {children, className, ...rest} = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                            <SyntaxHighlighter
                                PreTag="div"
                                children={String(children).replace(/\n$/, '')}
                                language={match[1]}
                                style={a11yDark}
                            />
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        )
                    }
                }}
            />
        </div>
    );
}