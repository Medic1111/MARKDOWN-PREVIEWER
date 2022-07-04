import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";

function App() {
  const [empty, setEmpty] = useState(true);
  const [input, setInput] = useState(placeholder);

  return (
    <div className="page">
      <header className="header">
        <h1 className="h1">MARKDOWN</h1>
      </header>
      <main className="main">
        <aside className="aside">
          <h2 className="h2">Input</h2>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="editor"
            className="textarea"
            rows="50"
            cols="60"
          ></textarea>
        </aside>
        <section className="section">
          <h2 className="h2">PREVIEW</h2>

          <pre className="p" id="preview">
            {marked(input)}
          </pre>
        </section>
      </main>
    </div>
  );
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 back-ticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default App;
