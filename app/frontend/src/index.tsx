import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import Layout from './components/Layout';
import RandomUsers from './pages/RandomUsers';
import HttpStatus from './pages/HttpStatus';
import RandomDogs from './pages/RandomDogs';
import Clients from './pages/Clients';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/random-users',
    element: <Layout pageTitle={'Pessoas aleatórias'} page={<RandomUsers />} />,
  },
  {
    path: '/http-cats',

    element: <Layout pageTitle={'Gatos HTTP'} page={<HttpStatus />} />,

  },
  {
    path: '/random-dogs',
    element: <Layout pageTitle={'Lindos doguinhos'} page={<RandomDogs />} />,
  },
  {
    path: '/clients',
    element: <Layout pageTitle={'Clientes'} page={<Clients />} />,
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
