import { MDXRemote } from 'next-mdx-remote/rsc'

export default function ServiceMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:font-bold prose-h1:mb-6 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-900 prose-ul:space-y-1">
      <MDXRemote source={markdown} />
    </div>
  )
}
