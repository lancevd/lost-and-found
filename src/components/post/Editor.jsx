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
        ["bold", "italic", "underline", "strike"],
        ["fontColor", "hiliteColor"],
        ["removeFormat"],
        ["outdent", "indent"],
        ["align", "horizontalRule", "list"],
        ["link", "image", "video"],
        ["preview"],
      ],
      // Ensure onChange is properly set
      callback: {
        onChange: function (contents) {
          if (onChange) {
            onChange(contents);
          }
        },
      },
    });

    // Set initial contents if any
    if (contents) {
      editorInstanceRef.current.setContents(contents);
    }

    // Cleanup on component unmount
    return () => {
      if (editorInstanceRef.current) {
        editorInstanceRef.current.destroy();
      }
    };
  }, [contents, onChange]);

  return <textarea className="!bg-transparent" ref={editorRef} />;
};

export default Editor;
