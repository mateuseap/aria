import { useQuery } from "@tanstack/react-query";
import AriaMascotLogo from "../../assets/mascot-only-logo.png";
import "./index.css";
import { VscOpenPreview } from "react-icons/vsc";
import ThemeSwitch from "../../components/ThemeSwitch";
import { NavLink } from "react-router-dom";

export default function Home() {
  const { data, isSuccess, isFetching } = useQuery<string>({
    queryKey: ["/api/", "GET"],
    enabled: true,
  });

  return (
    <>
      <div style={{ position: "absolute", top: "20px", left: "20px" }}>
        <ThemeSwitch loadTheme={false} />
      </div>
      <div className="home-container">
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <a
            className="github-link"
            href="https://github.com/mateuseap/aria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
            <p>Star on GitHub</p>
          </a>
          <NavLink to="/file-editor" className="github-link">
            <VscOpenPreview color="black" style={{ width: 20, height: 20 }} />
            <p>Live preview</p>
          </NavLink>
        </div>

        <img
          src={AriaMascotLogo}
          alt="Aria Mascot Logo"
          loading="lazy"
          className="mascot-logo"
        />
        {isFetching && <p className="loading-text">Loading...</p>}
        {isSuccess && <p className="data-text">{data}</p>}
        <p className="app-description">
          Let your ideas flow. A simple and efficient note taking app.
        </p>
        <p className="feature-description">
          Simple • Efficient • Inspired by Creativity
        </p>
        <p className="development-message">
          App is under development. Stay tuned!
        </p>
      </div>
    </>
  );
}
