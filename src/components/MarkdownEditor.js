// src/MarkdownEditor.js
import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import '../styles/App.css' // Import your CSS file

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  useEffect(() => {
    // Convert markdown to HTML when markdown changes
    setHtml(marked(markdown));
  }, [markdown]);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="app">
      <div className="textarea">
        <textarea
          value={markdown}
          onChange={handleChange}
          placeholder="Write your markdown here..."
        />
      </div>
      <div className="preview">
        {markdown ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;
