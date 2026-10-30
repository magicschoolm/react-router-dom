import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactLoayout from "./Layout/ContactLoayout";
import Products from "./pages/Products";
import Login from "./pages/Login";
import RootLayout from "./Layout/RootLayout";
import UserLayout from "./Layout/UserLayout";
import Info from "./pages/Info";
import Form from "./pages/Form";
import User from "./pages/User";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";
import { userLoader, userSingleLoader } from "./utils/userLoader";
import Users from "./pages/Users";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<ContactLoayout />} />
        <Route path="info" element={<Info />} />
        <Route path="form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
        <Route path="Login" element={<Login />} />
        <Route
          path="Users"
          element={<UserLayout />}
          errorElement={< ErrorPage />}
        >
          <Route index element={<Users />} loader={userLoader} />

          <Route
            path=":id"
            element={<User />}
            loader={userSingleLoader}
          />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;