"use client";

import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";

interface MdPreviewProps {
  markdown: string;
  className?: string;
}

interface CodeProps {
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
}
const Code: React.FC<CodeProps> = ({
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      style={oneDark}
      language={match[1]}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const MdPreview: React.FC<MdPreviewProps> = ({ markdown, className = "" }) => {
  const memoizedComponents = useMemo<any>(() => ({ code: Code }), []);
  const memoizedRemarkPlugins = useMemo(
    () => [remarkGfm, remarkMath, remarkGemoji],
    []
  );
  const memoizedRehypePlugins = useMemo(() => [rehypeKatex], []);

  if (!markdown.trim()) {
    return <div className="text-gray-500 italic">Please type something!</div>;
  }

  return (
    <div
      className={`prose prose-sm sm:prose lg:prose-lg xl:prose-xl break-words max-w-none ${className} overflow-scroll`}
    >
      <ReactMarkdown
        components={memoizedComponents}
        remarkPlugins={memoizedRemarkPlugins}
        rehypePlugins={memoizedRehypePlugins}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MdPreview;
