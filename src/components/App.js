import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const App = () => {
  const [markdown, setMarkdown] = useState('# Markdown Previewer\n\nWrite your markdown here...');

  return (
    <div className="app">
      <div className="textarea-container">
        <textarea
          className="textarea"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Write your markdown here..."
        />
      </div>
      <div className="preview-container">
        <ReactMarkdown className="preview">
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
