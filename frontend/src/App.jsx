
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <main className='container-fluid mx-auto px-4 py-6'>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default App
