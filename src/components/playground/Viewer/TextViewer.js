// TextViewer.js

import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/dist/adventure_time';
import React from 'react';
import './TextViewer.css';

const TextViewer = ({ content }) => {
  return (
    <>
        <JSONPretty 
            data={content} 
            theme={JSONPrettyMon} 
            className="text-viewer" 
            onJSONPrettyError = {
                e => console.error(e)
            }
        />
    </>
  );
};

export default TextViewer;
