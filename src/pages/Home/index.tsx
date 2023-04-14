import { useMousePositionStore } from '../../store/mousePositionStore'
import BkgIcons from '../../components/BkgIcons'
import Title from '../../components/Title'

function Home() {
  const { iconTransformX, iconTransformY } = useMousePositionStore()

  return (
    <div className="h-screen w-full bg-gradient-radial flex flex-col justify-center items-center">
      <Title />
      <BkgIcons
        iconTransformX={iconTransformX}
        iconTransformY={iconTransformY}
      />
    </div>
  )
}

export default Home
