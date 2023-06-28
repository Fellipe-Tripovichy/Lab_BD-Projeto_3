import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import AuthService from './Services/auth-service';


import HomeAdmin from './Pages/HomeAdmin';
import ResultsAdmin from './Pages/ResultsAdmin';
import CloseAirports from './Pages/CloseAirports';
import Authentication from './Pages/Authentication';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication/>
  },
  {
    path: "/ResultsAdmin",
    element: <ResultsAdmin/>
  },
  {
    path: "/CloseAirports",
    element: <CloseAirports/>
  },
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
