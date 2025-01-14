import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import FileEditor from "./pages/FileEditor";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/file-editor/:fileName?", element: <FileEditor /> },
]);

export default router;
