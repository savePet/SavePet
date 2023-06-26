import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './pages/home/App.tsx';
import Adotepet from './routes/AdotePet.tsx';
import { Login } from './pages/Login/Login.tsx';
import { Error } from './pages/Error404/Error.tsx';
import Auth from './routes/Auth.tsx';
import Acount from './routes/Acount.tsx';
import ProtectorP1 from './routes/ProtectorP1.tsx';
import ProtectorP2 from './routes/ProtectorP2.tsx';
import Confirmation from './routes/Confirmation.tsx';
import AdmInfo1 from './routes/AdmP1.tsx';
import FornCreden from './routes/FornCreden.tsx';
import FornInfo from './routes/FornInfo.tsx';
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
  },
  {
    path: "/ProtectorP1",
    element: <ProtectorP1 />
  },
  {
    path: "/ProtectorP2",
    element: <ProtectorP2 />
  },
  {
    path: '/Confirmation',
    element: <Confirmation />
  },
  {
    path: '/AdmInfo',
    element: <AdmInfo1 />
  },
  {
    path: '/FornCreden',
    element: <FornCreden />
  },
  {
    path: '/FornInfo',
    element: <FornInfo />
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