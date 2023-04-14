import { Link } from 'react-router-dom'
const Title = () => {
  return (
    <div className="flex flex-col justify-center z-50 pointer-events-none text-center font-mono w-fit rounded-lg p-5 text-white">
      <h1 className="text-5xl">Hola!🫡</h1>
      <p className="text-4xl uppercase font-bold mt-3 bg-gradient-to-r from-blue-500 to-violet-800 mix-blend-normal bg-clip-text text-transparent">
        Bienvenido a mi Portfolio
      </p>
      <h3 className="text-3xl mt-3">
        Soy <b className="underline decoration-blue-400">Ezequiel</b>,
        desarrollador Frontend
      </h3>
      <div className="pointer-events-auto flex justify-center self-center gap-10 mt-16">
        <Link to={'/projects'}>
          <button className="px-4 z-50 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg">
            PROYECTOS
          </button>
        </Link>
        <Link to={'/about'}>
          <button className="px-4 py-2 text-white border rounded-lg duration-100 hover:border-indigo-400 hover:text-indigo-400 active:shadow-lg">
            SOBRE MI
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Title
