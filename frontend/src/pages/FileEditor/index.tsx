import { useParams } from "react-router-dom";
import MarkdownEditor from "../../components/MarkdownEditor";
import Sidebar from "../../components/Sidebar";
import TextEditor from "../../components/TextEditor";

export default function FileEditor() {
  const allFileNames = ["README.md", "hello-world.txt"];
  const { fileName } = useParams<{ fileName: string }>();

  if (!fileName) {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar allFileNames={allFileNames} selectedFileName={fileName} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Welcome to the file editor of Aria!</h2>
          <h3>Please select a file to edit.</h3>
        </div>
      </div>
    );
  }

  if (!allFileNames.includes(fileName)) {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar allFileNames={allFileNames} selectedFileName={fileName} />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>File not found!</h2>
        </div>
      </div>
    );
  }

  if (fileName.endsWith(".md")) {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar allFileNames={allFileNames} selectedFileName={fileName} />
        <MarkdownEditor />
      </div>
    );
  }

  if (fileName.endsWith(".txt")) {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar allFileNames={allFileNames} selectedFileName={fileName} />
        <TextEditor />
      </div>
    );
  }
}
