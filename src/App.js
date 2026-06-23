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
          "https://www.notion.so/altien/Start-Here-c80862f7f08b4dd38649e47c3cd330c4"
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
