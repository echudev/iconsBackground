import { Link } from 'react-router-dom'
import HomeIcon from '../Iconos/HomeIcon'
import LightIcon from '../Iconos/LightIcon'
import Popup from '../Popup'
const Navbar = () => {
  return (
    <header className="absolute top-0 w-full text-white z-50 p-5 flex">
      <div className="flex gap-10 justify-end font-bold max-w-4xl ml-auto mr-10">
        <Link to="/" className="group relative">
          <HomeIcon />
          <Popup text="Home" />
        </Link>
        <LightIcon />
      </div>
    </header>
  )
}

export default Navbar
