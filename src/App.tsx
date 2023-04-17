import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { useMousePositionStore } from './store/mousePositionStore'

function App() {
  const { setHalfWidth, setHalfHeight, handleMousePosition } =
    useMousePositionStore()

  useEffect(() => {
    setHalfWidth(window.innerWidth / 2)
    setHalfHeight(window.innerHeight / 2)
  }, [window.innerWidth, window.innerHeight])

  return (
    <div // This is the div that contains the entire app
      onMouseMove={e => handleMousePosition(e)}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
