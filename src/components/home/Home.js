// Home.js

import React, { useState } from 'react';
import './Home.css';
import TinyMCEEditor from '../playground/Editor/TinyMCEEditor';
import TextViewer from '../playground/Viewer/TextViewer';

const Home = () => {
  const [editorContent, setEditorContent] = useState('');
  const [parsedContent, setParsedContent] = useState('');

  const handleEditorChange = content => {
    setEditorContent(content);
    parseAndSetContent(content);
  };

  const parseAndSetContent = content => {
    // Perform any additional parsing if needed
    setParsedContent(content);
  };

  return (
    <div className="home-container">
      <div className="left-panel">
        <div>
          <TinyMCEEditor 
            value={editorContent} 
            onChange={handleEditorChange}
            onParse={parseAndSetContent} // Pass a callback to TinyMCEEditor
          />
        </div>
      </div>
      <div className="right-panel">
        <TextViewer content={parsedContent} />
      </div>
    </div>
  );
};

export default Home;
