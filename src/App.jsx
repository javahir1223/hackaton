import './App.css'
import { Route, Routes } from 'react-router-dom'
import Solution from './pages/Solution'
import Footer from './pages/footer'
import Advice from './pages/Advice'
import Post from './pages/Post'
import Home from './pages/home'
import Header from './Header'
function App() {

  return (
    <>
   
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/advice' element={<Advice/>}/>
        <Route path='/solution' element={<Solution/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App



//1. rasam ga joylash contrysayd
//2.donat znka, svetofor, cameras,
//3/4. reason 
