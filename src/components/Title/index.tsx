const Title = () => {
  return (
    <div className="absolute z-50 top-1/3 w-full text-center font-mono text-white">
      <h1 className="text-5xl pointer-events-none">Hola!🫡</h1>
      <p className="pointer-events-none text-4xl uppercase font-bold mt-3 bg-gradient-to-r from-blue-400 to-violet-600 mix-blend-normal bg-clip-text text-transparent">
        Bienvenido a mi Portafolio
      </p>
      <h3 className="text-3xl mt-3">
        Soy <b className="pointer-events-none underline decoration-blue-400">Ezequiel</b>,
        desarrollador Frontend
      </h3>
      <div className="flex justify-center gap-5 mt-5">
        <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg">
          Proyectos
        </button>
        <button className="px-4 py-2 text-white border rounded-lg duration-100 hover:border-indigo-400 hover:text-indigo-400 active:shadow-lg">
          Sobre Mi
        </button>
      </div>
    </div>
  )
}

export default Title
