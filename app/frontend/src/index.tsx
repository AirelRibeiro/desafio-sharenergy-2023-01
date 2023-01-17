import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import Layout from './components/Layout';
import RandomUsers from './pages/RandomUsers';

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
    path: '/randon-dogs',
    element: <div>Dogs</div>,
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
