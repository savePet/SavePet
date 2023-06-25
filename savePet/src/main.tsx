import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

/*import { AdotePet } from './pages/adotePet/AdotePet.tsx'
import { HeaderAdote } from './components/headerAdote/HeaderAdote.tsx'
import { FooterAdote } from './components/footerAdote/FooterAdote.tsx'*/
import App from './pages/home/App.tsx';
import Adotepet from './routes/AdotePet.tsx';
import Homeadm from './routes/HomeAdm.tsx';

import Listarservico from './routes/ListarServico.tsx';
import { MenuProvider } from './contexts/menuAdm.tsx';
import Listarpet from './routes/ListarPetAdm.tsx';
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
    path: "/HomeAdm", 
    element: <Homeadm />,
  },
  {
    path: "/ServiçoAdm", 
    element: <Listarservico />,
  },
  {
    path: "/ListarPetAdm",
    element: <Listarpet />,
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MenuProvider>
      <RouterProvider router={router}/>
    </MenuProvider>
  </React.StrictMode>,
)
    /*<HeaderAdote />
    <AdotePet />
    <FooterAdote />*/