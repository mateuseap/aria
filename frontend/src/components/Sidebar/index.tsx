import { useState } from "react";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import ThemeSwitch from "../../components/ThemeSwitch";

interface SidebarProps {
  allFileNames: string[];
  selectedFileName?: string;
}

export default function Sidebar({ allFileNames }: SidebarProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "#333",
        color: "#fff",
        width: isSidebarCollapsed ? "60px" : "250px",
        transition: "width 0.3s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <button
        onClick={() => setIsSidebarCollapsed((prev) => !prev)}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "24px",
          marginBottom: "20px",
          cursor: "pointer",
          padding: "0",
          transition: "transform 0.3s",
        }}
      >
        {isSidebarCollapsed ? <FiChevronsRight /> : <FiChevronsLeft />}
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
          width: "100%",
          opacity: isSidebarCollapsed ? 0 : 1,
          transform: isSidebarCollapsed ? "translateX(-20px)" : "translateX(0)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        {allFileNames.map((fileName) => (
          <NavLink
            key={fileName}
            to={`/file-editor/${fileName}`}
            style={({ isActive }) => ({
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
              backgroundColor: isActive ? "#444" : "transparent",
              borderRadius: "5px",
              fontSize: "16px",
              textAlign: "center",
              width: "100%",
              display: "block",
              transition: "background-color 0.3s",
            })}
          >
            {fileName}
          </NavLink>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ThemeSwitch />
      </div>
    </div>
  );
}
