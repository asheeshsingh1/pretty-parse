// TinyMCEEditor.js

import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { convert } from 'html-to-text';
import './TinyMCEEditor.css';

const TinyMCEEditor = ({ value, onChange, onParse }) => {
  const editorRef = useRef(null);

  const parseAndShow = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      const parsedContent = convert(content, {
        wordwrap: 130,
        // ... other options for html-to-text
      });

      // Update parent component's state using the callback
      onParse(parsedContent);
    }
  };

  return (
    <div>
      <Editor
        apiKey='your-api-key'
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="Paste JSON here"
        init={{
          height: 590,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family: Helvetica, Arial, sans-serif; font-size: 14px }'
        }}
      />
      <button className="log-button" onClick={parseAndShow}>
        Parse
      </button>
    </div>
  );
};

export default TinyMCEEditor;

