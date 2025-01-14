import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeHighlight from "rehype-highlight";

export default function MarkdownEditor() {
  // This is a temporary placeholder, just for demonstration purposes
  const [markdown, setMarkdown] = useState(`
# mateuseap.github.io

## 🔧 Prerequisites

- Node.js
- NPM or Yarn

\`\`\`bash
# Cloning the repository
git clone https://github.com/mateuseap/mateuseap.github.io

# Entering the directory
cd mateuseap.github.io
\`\`\`

## 🚀 Running

\`\`\`bash
# Installing the npm dependencies
npm install

# Starting the project (development environment)
npm start
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits, you'll also see any lint errors in the console.

## 🧙‍♂️ Useful commands

### Build the project:
\`\`\`bash
npm run build
\`\`\`

### Commit build folder to \`gh-pages\` branch:
\`\`\`bash
npm run deploy
\`\`\`
  `);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
        padding: "40px",
        gap: "20px",
        boxSizing: "border-box",
      }}
    >
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{
          flex: "1",
          resize: "none",
          fontSize: "16px",
          padding: "10px",
          border: "1px solid var(--textarea-border)",
          borderRadius: "5px",
          backgroundColor: "var(--textarea-background)",
          color: "var(--text-color)",
          transition: "background-color 0.3s ease, color 0.3s ease",
          overflow: "auto",
        }}
      />
      <div
        style={{
          flex: "1",
          overflowY: "auto",
          padding: "10px",
          border: "1px solid var(--textarea-border)",
          borderRadius: "5px",
          backgroundColor: "var(--textarea-background)",
          color: "var(--text-color)",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        <Markdown
          remarkPlugins={[remarkGfm, remarkToc]}
          rehypePlugins={[rehypeHighlight]}
        >
          {markdown}
        </Markdown>
      </div>
    </div>
  );
}
