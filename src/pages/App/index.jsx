import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import NavBar from "../../Components/Navbar"
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';

import './App.css'

const AppRoutes = () => {
  
  let routes = useRoutes([
    {path:'/', element: <Home/>},
    {path:'/electronics', element: <Home/>},
    {path:'/all', element: <Home/>},
    {path:"/mens-clothes", element: <Home/>},
    {path:"/womens-clothes", element: <Home/>},
    {path:'/others', element: <Home/>},
    {path:'/jewelery', element: <Home/>},
    {path:'/my-orders', element: <MyOrders/>},
    {path:'/my-orders/last', element: <MyOrder/>},
    {path:'/my-orders/:id', element: <MyOrder/>},
    {path:'/my-account', element: <MyAccount/>},
    {path:'/my-order', element: <MyOrder/>},
    {path:"/sign-in", element: <SignIn/>},
    {path: '/*', element: <NotFound/>}

  ])

  return routes
}

const App = () => {

  return (
    <>
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>

    </>
  )
}

export default App
