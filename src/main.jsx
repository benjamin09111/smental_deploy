import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import store from "./redux/store.js";
import {Provider} from "react-redux";

import Main from "./pages/main/Main.jsx";
import Principal from "./pages/principal/Principal.jsx";
import Unauthorized from './components/Unauthorized.jsx';
import Tutorial from "./pages/principal/Tutorial.jsx";
import NavP from "./components/nav_principal/NavbarP.jsx";
import Admin from "./components/admin/Index.jsx";
import AdminHome from "./components/admin/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <NavP />
        <Principal />
      </>
  },
  {
    path: "/home",
    element: <Main />
  },
  {
    path: "/intro",
    element: <Tutorial />
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />
  },
  {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "/backend",
    element: <AdminHome />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
