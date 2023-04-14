import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="absolute top-0 w-full text-white z-50 bg-navbarBkg backdrop-blur-sm border-b-[1px] border-borderColor p-7">
      <div className="flex gap-10 justify-end font-bold max-w-4xl mx-auto">
        <Link to="/" className="mr-auto ml-10">
          HOME
        </Link>
        <div>LANG</div>
        <div>LIGHT</div>
      </div>
    </header>
  )
}

export default Header
