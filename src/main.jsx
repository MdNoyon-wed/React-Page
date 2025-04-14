import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,  RouterProvider} from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/home/Home.jsx';
import Mobiles from './components/mobiles/Mobiles.jsx';
import Loptops from './components/laptops/Loptops.jsx';


const router = createBrowserRouter([
  {

   path:'/',
   Component:Root,
   children:[
    // {index: true ,component:Home},
    {path:'home', Component:Home},
    {path:'mobiles', Component:Mobiles},
    {path:'laptops', Component:Loptops}
   ]
   
  },
  {
    path:'about',
    element:<div>hi about</div>
  },
  {
    path:'blogs',
    element:<div>All my blogs are here</div>
    },
    {
      path: 'app',
 
    }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
