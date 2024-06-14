import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Slider from './Component/Home/Slider.jsx'
import Slider_details from './Component/Home/Slider_details.jsx'
import Resume_Guide from './Component/Home/Resume_Guide.jsx'
import Aboutus from './Component/About-Us/Aboutus.jsx'
const route =createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<App/>
      },
      {
        path:"templates",
        element:<Resume_Guide/>
      },
      {
        path:"about",
        element:<Aboutus/>
      }
      // {
      //   path:"slide/:id",
      //   element:<Slider_details/>
      // }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={route}/>
    {/* <App /> */}
  </React.StrictMode>,
)
