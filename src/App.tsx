import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { useRef, useEffect } from 'react'
import { useMousePositionStore } from './store/mousePositionStore'

function App() {
  const container = useRef<HTMLDivElement | null>(null)
  const { setHalfWidth, setHalfHeight, handleMousePosition } =
    useMousePositionStore()

  useEffect(() => {
    if (container.current) {
      const { width, height } = container.current.getBoundingClientRect()
      setHalfWidth(width / 2)
      setHalfHeight(height / 2)
    }
  }, [window.innerWidth, window.innerHeight, container.current])

  return (
    <div // This is the div that contains the entire app
      ref={container}
      onMouseMove={e => handleMousePosition(e)}>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
