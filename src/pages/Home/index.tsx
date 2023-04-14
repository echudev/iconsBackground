import { useRef } from 'react'
import { useIconTransform } from '../../hooks/useIconTransform'
import BkgIcons from '../../components/BkgIcons'
import Title from '../../components/Title'

function Home() {
  const container = useRef<HTMLDivElement | null>(null)
  const { iconTransformX, iconTransformY, handleMousePosition } =
    useIconTransform(container)

  return (
    <div
      ref={container}
      onMouseMove={e => handleMousePosition(e)}
      className="h-screen w-full bg-gradient-radial flex flex-col justify-center items-center">
      <Title />
      <BkgIcons
        iconTransformX={iconTransformX}
        iconTransformY={iconTransformY}
      />
    </div>
  )
}

export default Home
