import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Markets from "./routes/Markets";
import Friends from "./routes/Friends";
import Account from "./routes/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/markets",
        element: <Markets />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
