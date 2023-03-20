import { useState, createContext } from "react";
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

type Account = {
  email: string;
} | null;

const AccountContext = createContext<{
  account: Account;
  signIn: () => void;
  signOut: () => void | null;
}>({
  account: null,
  signIn: () => {},
  signOut: () => {},
});

export default function App() {
  const [account, setAccount] = useState<Account>(null);

  function signIn() {
    setAccount({
      email: "test",
    });
  }

  function signOut() {
    setAccount(null);
  }

  return (
    <AccountContext.Provider value={{ account, signIn, signOut }}>
      <RouterProvider router={router} />;
    </AccountContext.Provider>
  );
}
