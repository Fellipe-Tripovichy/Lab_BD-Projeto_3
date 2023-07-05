import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import HomeAdmin from './Pages/HomeAdmin';
import ResultsAdmin from './Pages/ResultsAdmin';
import CloseAirports from './Pages/CloseAirports';
import Authentication from './Pages/Authentication';
import HomeConstructor from './Pages/HomeConstructor';
import HomeDriver from './Pages/HomeDriver';
import ResultsConstructor from './Pages/ResultsConstructor';
import DriversConstructor from './Pages/DriversConstructor';
import ResultsDriver from './Pages/ResultsDriver';
import HistoryDriver from './Pages/HistoryDriver';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication/>
  },
  {
    path: "/HomeAdmin",
    element: <HomeAdmin/>
  },
  {
    path: "/ResultsAdmin",
    element: <ResultsAdmin/>
  },
  {
    path: "/CloseAirports",
    element: <CloseAirports/>
  },
  {
    path: "/HomeConstructor",
    element: <HomeConstructor/>
  },
  {
    path: "/HomeDriver",
    element: <HomeDriver/>
  },
  {
    path: "/ResultsConstructor",
    element: <ResultsConstructor/>
  },
  {
    path: "/DriversConstructor",
    element: <DriversConstructor/>
  },
  {
    path: "/ResultsDriver",
    element: <ResultsDriver/>
  },
  {
    path: "/HistoryDriver",
    element: <HistoryDriver/>
  },
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
