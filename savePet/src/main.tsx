import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
/*import { AdotePet } from './pages/adotePet/AdotePet.tsx'
import { HeaderAdote } from './components/headerAdote/HeaderAdote.tsx'
import { FooterAdote } from './components/footerAdote/FooterAdote.tsx'*/
import App from './pages/home/App.tsx';
import Adotepet from './routes/AdotePet.tsx';
import { Login } from './pages/Login/Login.tsx';
import { RegisterCount } from './pages/Crenditals/RegisterAcount/RegisterAcount.tsx';
import { Error } from './pages/Error404/Error.tsx';
import {RegisterAuth} from './pages/Crenditals/RegisterAuth/RegisterAuth.tsx';
import Auth from './routes/Auth.tsx';
import Acount from './routes/Acount.tsx';
// import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/AdotePet",
    element: <Adotepet />,
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Count",
    element: <Acount />
  },
  {
    path: "/Auth",
    element: <Auth />
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
    /*<HeaderAdote />
<AdotePet />
<FooterAdote />*/