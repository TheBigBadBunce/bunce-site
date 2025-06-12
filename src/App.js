import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { GlobalStyle } from "data/styles";

import HomePage from "pages/Home";
import AboutPage from "pages/About";
import ContactPage from "pages/Contact";
import ProjectPage from "pages/Project";
import NotFoundRedirectPage from "pages/NotFoundRedirect";

// RRv6 binned redirects :(
const Redirect = ({ to }) => {
  window.location.href = to;
  return null;
};

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
  {
    path: "/dungeon",
    element: (
      <Redirect
        to={
          "https://altien.notion.site/Crunch-b7510f48249249edb38111e09246c8d4"
        }
      />
    ),
  },
  {
    path: "/:forwardAddress",
    element: <NotFoundRedirectPage />,
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
