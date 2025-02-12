import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Root/Root';
import Registration from './Components/Regsitration/Registration';
import AuthProvider from './ContexProvider/AuthProvider';
import Loging from './Components/LogIn/Loging';
import Home from './Root/Layout/Home';
import FictionBook from './Components/BookList/FictionBook';
import ScienceBooks from './Components/BookList/ScienceBooks';
import HistoryBooks from './Components/BookList/HistoryBooks';
import NonFictionBooks from './Components/BookList/NonFictionBooks';
import Details from './Components/Details/Details';
import Private from './Private/Private';
import BorrowedBooks from './Root/Layout/BorrowedBooks';
import AllBooks from './Root/Layout/AllBooks';
import UpdateBooks from './Root/Layout/UpdateBooks';
import AddBook from './Root/Layout/AddBooks';
import NotFound from './Root/Layout/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "reg",
        element: <Registration></Registration>
      },
      {
        path: "login",
        element: <Loging></Loging>
      },
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/fiction",
        element: <FictionBook></FictionBook>,
        loader: () => fetch('https://libraymanagement-nu.vercel.app/fiction')
      },
      {
        path: "/science",
        element: <ScienceBooks></ScienceBooks>,
        loader: () => fetch('https://libraymanagement-nu.vercel.app/science')
      },
      {
        path: "/history",
        element: <HistoryBooks></HistoryBooks>,
        loader: () => fetch('https://libraymanagement-nu.vercel.app/history')
      },
      {
        path: "/non-fiction",
        element: <NonFictionBooks></NonFictionBooks>,
        loader: () => fetch('https://libraymanagement-nu.vercel.app/nonfiction')
      },
      {
        path: "/details/:category/:id",
        element: <Private><Details /></Private>,
        loader: async ({ params }) => {
          const { category, id } = params;
          const response = await fetch(`https://libraymanagement-nu.vercel.app/${category}/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch details");
          }
          return response.json();
        },
      },
      {
        path: "/borrowed",
        element: <Private><BorrowedBooks></BorrowedBooks></Private>,
        loader: () => fetch('https://libraymanagement-nu.vercel.app/borrow')
      },
      {
        path: "/allbooks",
        element: <Private><AllBooks></AllBooks></Private>,

      },
      {
        path: "/update",
        element: <Private><UpdateBooks></UpdateBooks></Private>
      },
      {
        path: "/addbooks",
        element: <Private><AddBook></AddBook></Private>
      }

    ]
  },
]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
