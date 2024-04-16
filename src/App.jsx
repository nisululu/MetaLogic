import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Careers from './pages/careers/Careers'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Service from './pages/service/Service'
import Blogs from './pages/blogs/Blogs'
import Aboutus from './pages/aboutus/Aboutus'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' Component={Home} />
        <Route path='/careers' Component={Careers} />
        <Route path='/services' Component={Service} />
        <Route path='/blogs' Component={Blogs} />
        <Route path='/about' Component={Aboutus} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
