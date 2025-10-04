import { Outlet } from 'react-router'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <>
    <Sidebar/>
      <Outlet/>
    </>
  )
}

export default App
