
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Contact } from './pages/contact'
import About from './pages/About'
import { Home } from './pages/Home'
import { Achievement } from './pages/Achievement'
import { ProjectPage } from './pages/Project'
import { InProgress } from './pages/InProgrss'
import { AllCertificates } from './pages/AllCertificates'

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/contact' element ={<Contact/>}></Route>
        <Route path='/about' element ={<About/>}></Route>
        <Route path='/achievement' element ={<Achievement/>}></Route>
        <Route path='/project' element ={<ProjectPage/>}></Route>
        <Route path='/inprogress' element ={<InProgress/>}></Route>
        <Route path='/certificates' element ={<AllCertificates/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
