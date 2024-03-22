import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Main from "./pages/main/Main.jsx";
import Principal from "./pages/principal/Principal.jsx";
import Unauthorized from './components/Unauthorized.jsx';
import Tutorial from "./pages/principal/Tutorial.jsx";
import NavP from "./components/nav_principal/NavbarP.jsx";

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
