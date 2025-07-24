import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Projects/Project";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";
import Notfound from "./pages/Notfound/Notfound";

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
    path: "/Skills",
    title: "Skills",
    element: <Skills />,
  },
  {
    path: "/Projects",
    title: "Projects",
    element: <Project />,
  },
  {
    path: "/Contact",
    title: "Contact",
    element: <Contact />,
  },
];

function App() {
  return (
    <>
      <Routes>
        {Menus.map((ele) => (
          <Route path={ele.path} element={ele.element} />
        ))}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
