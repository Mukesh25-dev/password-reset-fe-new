import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import ResetPassword from "../components/ResetPassword";
import Login from "./pages/Login";
import RequestPasswordReset from "../components/RequestPasswordReset";

const routes = [
  {
    path: "/",
    element: <Register />,
    hydrateFallBackElement: <p>loading....</p>,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
    hydrateFallBackElement: <p>loading....</p>,
  },
  {
    path: "/login",
    element: <Login />,
    hydrateFallBackElement: <p>loading....</p>,
  },
  {
    path: "/forgot-password",
    element: <RequestPasswordReset />,
    hydrateFallBackElement: <p>loading....</p>,
  },
];

const router = createBrowserRouter(routes, {
  caseSensitive: false,
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

const App = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    ></RouterProvider>
  );
};

export default App;
