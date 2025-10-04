import { Outlet } from 'react-router'
import Aside from './components/Aside'

function App() {


  return (
    <>
      <div className='flex flex-col lg:flex-row gap-2'>
        <Aside />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
