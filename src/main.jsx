import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Browse from "./components/Browse/Browse";
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Login from "./components/Login/Login"
import GetStarted from "./components/GetStarted/GetStarted"
import Search from "./components/Search/Search"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element:<Home />
      },
      {
        path:"browse",
        element:<Browse />
      },
      {
        path:"search",
        element:<Search />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "getStarted",
        element: <GetStarted />
      },
      {
        path:"contact",
        element:<Contact />
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path = '/' element={<Layout />}>
//       <Route path = '' element={<Home />} />
//       <Route path = 'browse' element={<Browse />} />
//       <Route path = 'search' element={<Search />} />
//       <Route path = 'about' element={<About />} />
//       <Route path = 'login' element={<Login />} />
//       <Route path = 'getStarted' element={<GetStarted />} />
//       <Route path = 'contact' element={<Contact />} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)