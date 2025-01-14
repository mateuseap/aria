import { useState } from "react";

export default function TextEditor() {
  // This is a temporary placeholder, just for demonstration purposes
  const [text, setText] = useState(
    "Alise in Wonderland but in a codebase...🐇🕳️\n\n\n'Follow the bugs, not the rabbit!' - Alise, 2025 Edition"
  );

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
        value={text}
        onChange={(e) => setText(e.target.value)}
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
    </div>
  );
}
