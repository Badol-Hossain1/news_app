import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import Home from '../pages/home/Home';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
    ],
  },
]);
export default routers;
