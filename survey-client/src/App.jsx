
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Header/Nav'
import Footer from './components/Footer/Footer'


function App() {
  

  return (
    <div>
      <Nav></Nav>

      <div >
        <Outlet />
      </div>
      <Footer></Footer>
      
    </div>
  )

  
}

export default App
