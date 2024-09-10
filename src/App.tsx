import './App.css'

import { useState } from 'react'
import { BarLoader } from 'react-spinners'
import { Login } from './pages/Login'
import { Home } from './pages/Home'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isLogged, setIsLogged] = useState(true)

  const fakeLoading = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    setIsLogged(true)
  }

  return (
    <>
      {isLoading ? (
        <div className='w-full h-screen flex items-center justify-center bg-[#111215]'>
          <div className='md:hidden'>
            <BarLoader color='#ffffff' width='200px' height='8px' />
          </div>

          <div className='hidden md:block'>
            <BarLoader color='#ffffff' width='600px' height='8px' />
          </div>
        </div>
      ) : isLogged ? (
        <Home />
      ) : (
        <Login setIsLoading={() => fakeLoading()} />
      )}
    </>
  )
}

export default App
