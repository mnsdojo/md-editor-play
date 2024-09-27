"use client";
import MdEditor from "./md-editor";
import MdPreview from "./md-preview";
import { useState } from "react";

function MdPlayGround() {
  const [markdown, setMarkdown] = useState(`
## Welcome to Markdown Playground

Start typing your markdown here!

### Features of Markdown

- **Bold text**
- *Italic text*
- ~~Strikethrough~~

### Math Examples

Inline math: The equation for the area of a circle is \( A = \pi r^2 \).

Block math:

$$
E = mc^2
$$

### Code Blocks

\`\`\`javascript
function greet() {
  console.log("Hello, Markdown!");
}
\`\`\`

### Lists

1. First item
2. Second item
   - Sub item 1
   - Sub item 2

### Blockquotes

> "Markdown is a lightweight markup language."

### Links and Images

[OpenAI](https://www.openai.com)

![Markdown Logo](https://markdown-here.com/img/icon256.png)

### Tables

| Header 1 | Header 2 |
|----------|----------|
| Row 1    | Row 2    |
| Row 3    | Row 4    |

### Horizontal Rule

---

### Task Lists

- [ ] Task 1
- [x] Task 2 (completed)
- [ ] Task 3
  `);

  return (
    <div>
      <div className="w-1/2">
        <MdEditor />
        left
      </div>
      <div className="w-1/2">
        <MdPreview markdown={markdown} />
      </div>
    </div>
  );
}

export default MdPlayGround;
