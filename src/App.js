import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { GlobalStyle } from "data/styles";

import HomePage from "pages/Home";
import AboutPage from "pages/About";
import ContactPage from "pages/Contact";
import ProjectPage from "pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/project/:slug",
    element: <ProjectPage />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
