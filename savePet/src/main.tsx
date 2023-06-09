import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MenuProvider } from './contexts/menuAdm.tsx';
import { Error } from './pages/Error404/Error.tsx';
import { Login } from './pages/Login/Login.tsx';
import App from './pages/home/App.tsx';
import Acount from './routes/Acount.tsx';
import AdmInfo1 from './routes/AdmP1.tsx';
import Adotepet from './routes/AdotePet.tsx';
import Auth from './routes/Auth.tsx';
import Confirmation from './routes/Confirmation.tsx';
import FornCreden from './routes/FornCreden.tsx';
import FornInfo from './routes/FornInfo.tsx';
import Homeadm from './routes/HomeAdm.tsx';
import Listarfornecedor from './routes/ListarFornecedorAdm.tsx';
import Listarocorrencia from './routes/ListarOcorrenciaAdm.tsx';
import Listarpet from './routes/ListarPetAdm.tsx';
import Listarprotetor from './routes/ListarProtetorAdm.tsx';
import Listarservico from './routes/ListarServico.tsx';
import ProtectorP1 from './routes/ProtectorP1.tsx';
import ProtectorP2 from './routes/ProtectorP2.tsx';
import Modal from 'react-modal'


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
  },
  {
    path: "/ListarProtetorAdm",
    element: <Listarprotetor />,
  },
  {
    path: "/ListarFornecedorAdm",
    element: <Listarfornecedor />,
  },
  {
    path: "/ListarOcorrenciaAdm",
    element: <Listarocorrencia />,

  }
])
Modal.setAppElement('#root');


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MenuProvider>
      <RouterProvider router={router}/>
    </MenuProvider>
  </React.StrictMode>,
);
    /*<HeaderAdote />
<AdotePet />
<FooterAdote />*/