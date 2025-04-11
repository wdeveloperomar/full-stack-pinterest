import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from "./routes/homePage/HomePage"
import CreatePage from "./routes/createpage/CreatePage"
import PostPage from "./routes/postPage/PostPage"
import AuthPage from "./routes/authPage/AuthPage"
import ProfilePage from "./routes/profilePage/ProfilePage"
import SearchPage from "./routes/searchPage/SearchPage"
import {BrowserRouter, Route, Routes} from "react-router"
import MainLayout from './routes/layouts/MainLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/create' element={<CreatePage></CreatePage>}></Route>
          <Route path='/pin/:id' element={<PostPage></PostPage>}></Route>
          <Route path='/:username' element={<ProfilePage></ProfilePage>}></Route>
          <Route path='/search' element={<SearchPage></SearchPage>}></Route>
        </Route>
        <Route path='/auth' element={<AuthPage></AuthPage>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
