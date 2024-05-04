import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Products from './Products';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import Address from './Address';
import LanguageContext from './LanguageContext';
import Movies from './Movies';
import { Provider } from 'react-redux';
import { store } from './Store';
import FavouriteMovies from './FavouriteMovies';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '', element: <Layout />, errorElement: <NotFound/>, children: [
        
        { path: 'login', element: <ProtectedRoute> <Login/> </ProtectedRoute> },
        { path: 'home', element: <ProtectedRoute> <Home /> </ProtectedRoute> },
        { path: 'products', element: <ProtectedRoute>  <Products /> </ProtectedRoute> },
        { path: 'address', element: <ProtectedRoute> <Address/> </ProtectedRoute> },
        { path: 'productDetails/:id', element: <ProtectedRoute> <ProductDetails /> </ProtectedRoute> },
        { path: 'movies', element: <ProtectedRoute> <Movies/> </ProtectedRoute> },
        { path: 'favorites', element: <ProtectedRoute> <FavouriteMovies/> </ProtectedRoute> },
      ]
    }
  ])

  return (
    <>
    <Provider store={store}>
      <LanguageContext>
  
        <RouterProvider router={router}></RouterProvider>

       </LanguageContext>
    </Provider>
    
    </>
  )
}
