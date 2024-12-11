import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { lazy } from "react";
// import WatchPage from "./components/WatchPage.jsx";

const App = lazy(() => import("./App.jsx"));
const Login = lazy(() => import("./components/Login.jsx"));
const SignUp = lazy(() => import("./components/SignUp.jsx"));
const HomePage = lazy(() => import("./components/HomePage.jsx"));
const ChannelForm = lazy(() => import("./components/ChannelForm.jsx"));
const ChannelPage = lazy(() => import("./components/ChannelPage.jsx"));
const WatchPage = lazy(() => import("./components/WatchPage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<div>Loading..</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/channelForm",
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <ChannelForm />
          </Suspense>
        ),
      },
      {
        path: "/channelPage",
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <ChannelPage />
          </Suspense>
        ),
      },
      {
        path: "/channelForm",
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <ChannelForm />
          </Suspense>
        ),
      },
      {
        path: "/video/:id",
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SignUp />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
