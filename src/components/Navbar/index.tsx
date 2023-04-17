import { Link } from 'react-router-dom'
import HomeIcon from '../Iconos/HomeIcon'
import LightIcon from '../Iconos/LightIcon'
const Navbar = () => {
  return (
    <header className="absolute top-0 w-full text-white z-50 bg-navbarBkg backdrop-blur-sm border-b-[1px] border-borderColor p-7">
      <div className="flex gap-10 justify-end font-bold max-w-4xl mx-auto">
        <Link
          to="/"
          className="group relative mr-auto ml-10 border border-transparent p-2 rounded-md transition-all duration-300 hover:border-white">
          <HomeIcon />
          <div
            className="absolute top-full left-0 opacity-0 p-2
            bg-slate-700 mt-2 rounded-md
           transition ease-in transform group-hover:delay-700
           group-hover:opacity-100 flex justify-center items-center">
            <span className="text-white font-bold">Home</span>
          </div>
        </Link>
        <div>LANG</div>
        <LightIcon />
      </div>
    </header>
  )
}

export default Navbar
