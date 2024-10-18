import React from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

interface MarkdownRendererProps {
    content: string
}

export default function MarkdownRenderer({
    content = "# Default Markdown\n\nThis is some default content."
}: MarkdownRendererProps) {
    return (
        <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown
                components={{
                    code({ className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "")
                        const language = match ? match[1] : ""
                        const isInline = !match

                        return isInline ? (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        ) : (
                            <SyntaxHighlighter
                                style={atomDark}
                                language={language}
                                PreTag="div"
                                {...(props as any)}
                            >
                                {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                        )
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}
