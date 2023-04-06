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
        onMouseMove={e => handleMousePosition(e)}
        className="h-screen w-full bg-gradient-radial flex flex-col justify-center items-center">
        <Title />
        <BkgIcons
          iconTransformX={iconTransformX}
          iconTransformY={iconTransformY}
        />
      </header>
      <main className="flex flex-col items-center bg-repeat bg-overlay-pattern">
        <div className="relative bottom-16 bg-iconBkg backdrop-blur-md w-80 h-32 rounded-xl z-50"></div>
      </main>
    </div>
  )
}

export default App
