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
    path: "/doggos",
    element: (
      <Redirect
        to={
          "https://www.notion.so/altien/Best-in-Show-37557d70ec138080bcc8db51a95c61d2"
        }
      />
    ),
  },
  {
    path: "/dinos",
    element: (
      <Redirect
        to={
          "https://www.notion.so/altien/A-Gold-Piece-for-Big-Man-37557d70ec13802c93bcf61b9901e572"
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
