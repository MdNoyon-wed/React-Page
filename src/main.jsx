import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,  RouterProvider} from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/home/Home.jsx';
import Mobiles from './components/mobiles/Mobiles.jsx';
import Loptops from './components/laptops/Loptops.jsx';
import Users from './components/users/Users.jsx';
import Users2 from './components/users2/Users2.jsx';
import UsersDetails from './components/usersDetails/UsersDetails.jsx';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());


const router = createBrowserRouter([
  {

   path:'/',
   Component:Root,
   children:[
    // {index: true ,component:Home},
    {path:'home', Component:Home},
    {path:'mobiles', Component:Mobiles},
    {path:'laptops', Component:Loptops},
    {
      path:'users',
      loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
       Component:Users
      },
      {path:'users2',
        element:<Suspense fallback={<span>Loading......</span>}>
        <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>

      },
      {path:'user/userId',
        // loader:{(params)}=> fetch(),
        Component:UsersDetails

      }
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
