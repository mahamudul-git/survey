
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Header/Nav'


function App() {
  

  return (
    <div>
      <Nav></Nav>

      <div >
        <Outlet />
      </div>
      
    </div>
  )

  
}

export default App
