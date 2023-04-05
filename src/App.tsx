import { useRef } from 'react'
import { useIconTransform } from './hooks/useIconTransform'
import BkgIcons from './components/BkgIcons'
import Title from './components/Title'

function App() {
  const container = useRef<HTMLDivElement | null>(null)
  const { iconTransformX, iconTransformY, handleMousePosition } =
    useIconTransform(container)

  return (
    <div>
      <header
        ref={container}
        onMouseMove={e => handleMousePosition(e.nativeEvent)}
        className="h-screen w-screen bg-gradient-radial">
        <Title />
        <BkgIcons
          iconTransformX={iconTransformX}
          iconTransformY={iconTransformY}
        />
      </header>
    </div>
  )
}

export default App
