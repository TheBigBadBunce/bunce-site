import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "pages/Home";
import { GlobalStyle } from "data/styles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
