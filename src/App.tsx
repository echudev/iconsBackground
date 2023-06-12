import { useEffect } from 'react'
import { useMousePositionStore } from './store/mousePositionStore'
import BkgIcons from './components/BkgIcons'

function App() {
  const {
    setHalfWidth,
    setHalfHeight,
    handleMousePosition,
    iconTransformX,
    iconTransformY,
  } = useMousePositionStore()

  useEffect(() => {
    setHalfWidth(window.innerWidth / 2)
    setHalfHeight(window.innerHeight / 2)
  }, [window.innerWidth, window.innerHeight])

  return (
    <div
      onMouseMove={e => handleMousePosition(e)}
      className="h-screen w-full px-6 bg-gradient-radial flex flex-col items-center">
      <BkgIcons
        iconTransformX={iconTransformX}
        iconTransformY={iconTransformY}
      />
    </div>
  )
}

export default App
