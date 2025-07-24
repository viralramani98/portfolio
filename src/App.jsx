import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Projects/Project";

export const Menus = [
  {
    path: "/",
    title: "Home",
    element: <Home />,
  },
  {
    path: "/About",
    title: "About",
    element: <About />,
  },
  {
    path: "/Projects",
    title: "Projects",
    element: <Project />,
  },
];

function App() {
  return (
    <>
      <Routes>
        {Menus.map((ele) => (
          <Route path={ele.path} element={ele.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
