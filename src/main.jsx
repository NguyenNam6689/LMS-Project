///* LIB
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

//* IMPORT
import '@/styles';
import LoadingPage from './components/loadings/LoadingPage';
import router from './routes/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} fallbackElement={<LoadingPage />} />,
);
