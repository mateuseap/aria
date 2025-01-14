import { useState, useEffect } from "react";

interface ThemeSwitchProps {
  loadTheme?: boolean;
}

export default function ThemeSwitch({ loadTheme = true }: ThemeSwitchProps) {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${theme}-mode`);

    if (loadTheme) {
      const linkId = "highlight-theme";
      const existingLink = document.getElementById(
        linkId
      ) as HTMLLinkElement | null;
      const themeUrl =
        theme === "dark"
          ? "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark.min.css"
          : "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css";

      if (existingLink) {
        existingLink.href = themeUrl;
      } else {
        const link = document.createElement("link");
        link.id = linkId;
        link.rel = "stylesheet";
        link.href = themeUrl;
        document.head.appendChild(link);
      }
    }

    localStorage.setItem("theme", theme);
  }, [theme, loadTheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#2c2c2c" : "#f9f9f9",
        color: theme === "light" ? "#f9f9f9" : "#2c2c2c",
        border: "none",
        borderRadius: "50%",
        padding: "10px",
        cursor: "pointer",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        outline: "none",
      }}
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
        >
          <path
            d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
        >
          <path
            d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
}
