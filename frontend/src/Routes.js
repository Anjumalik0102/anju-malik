import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home';
import About from './components/AboutMe';
import Contact from './components/ContactMe';
import Skill from './components/Skill';
import Work from './components/Work';
import AppLayout from './components/AppLayout';

function Routes() {
  const router = createBrowserRouter([
    {
      path: '/*',
      element: <Home />,
      // children: [
      //   {
      //     path: '/*',
      //     element: <Home />,
      //   },
      //   // {
      //   //   path: '/about',
      //   //   element: <About />,
      //   // },
      //   // {
      //   //   path: '/skill',
      //   //   element: <Skill />,
      //   // },
      //   // {
      //   //   path: '/work',
      //   //   element: <Work />,
      //   // },
      //   // {
      //   //   path: '/contact', 
      //   //   element: <Contact />,
      //   // },
      // ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
