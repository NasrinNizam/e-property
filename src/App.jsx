import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { LayoutOne } from './Layouts/LayoutOne'
import { Home } from './Components/Home'
import { SearchPage } from './Pages/SearchPage'
import { LandPage } from './Pages/LandPage'
import { ServicePage } from './Pages/ServicePage'
import { AuctionPage } from './Pages/AuctionPage'
import { LoginPage } from './Pages/LoginPage'
import { TenderPage } from './Pages/TenderPage'
import { Notfound } from './Pages/Notfound'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path='/searchPage' element={<SearchPage/>}/>
        <Route path='/landPage' element={<LandPage/>}/>
        <Route path='/tenderPage' element={<TenderPage/>}/>
        <Route path='/auctionPage' element={<AuctionPage/>}/>
        <Route path='/servicePage' element={<ServicePage/>}/>
        <Route path='/loginPage' element={<LoginPage/>}/>
        </Route>
        <Route path='*' element={<Notfound/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
