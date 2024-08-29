import React, { useRef, useEffect } from "react";
import suneditor from "suneditor";
import plugins from "suneditor/src/plugins";
import "suneditor/dist/css/suneditor.min.css";

const Editor = ({ contents, onChange }) => {
  const editorRef = useRef(null);
  const editorInstanceRef = useRef(null);

  useEffect(() => {
    // Initialize SunEditor
    editorInstanceRef.current = suneditor.create(editorRef.current, {
      plugins: plugins,
      width: "100%",
      height: "auto",
      minHeight: "400px",
      buttonList: [
        ["undo", "redo"],
        // ["font", "fontSize", "formatBlock"],
        ["bold", "italic", "underline", "strike"],
        ["fontColor", "hiliteColor"],
        ["removeFormat"],
        ["outdent", "indent"],
        ["align", "horizontalRule", "list"],
        ["link", "image", "video"],
        // ["fullScreen", "showBlocks", "codeView"],
        ["preview"],
      ],
      className: "custom-editor", // Adding custom class to SunEditor wrapper
      //   styleArray: [
      //     "background-color", // Prevent SunEditor from removing custom background color
      //   ],
      addCSS: [
        ".custom-editor .se-wrapper { background-color: red; }",
        ".custom-editor .se-wrapper-inner { border-radius: 8px; }",
        ".custom-editor .se-editable { font-size: 16px; color: #333; }",
      ],
    });

    // Add event listener for content changes
    editorInstanceRef.current.onChange = (contents) => {
      if (onChange) {
        onChange(contents);
      }
    };

    // Set initial contents
    if (contents) {
      editorInstanceRef.current.setContents(contents);
    }

    // Cleanup on unmount
    return () => {
      if (editorInstanceRef.current) {
        editorInstanceRef.current.destroy();
      }
    };
  }, [contents, onChange]);

  return <textarea className="!bg-transparent" ref={editorRef} />;
};

export default Editor;
