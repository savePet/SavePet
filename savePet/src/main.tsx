import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
/*import { AdotePet } from './pages/adotePet/AdotePet.tsx'
import { HeaderAdote } from './components/headerAdote/HeaderAdote.tsx'
import { FooterAdote } from './components/footerAdote/FooterAdote.tsx'*/
import App from './pages/home/App.tsx';
import Adotepet from './routes/AdotePet.tsx';
import { Login } from './pages/Login/Login.tsx';
import { Count } from './pages/Crenditals/RegisterAcount/Count.tsx';
// import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    element: <Count />
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