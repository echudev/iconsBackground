const Title = () => {
  return (
    <div className="absolute flex flex-col justify-center z-50 pointer-events-none top-1/3 w-full text-center font-mono text-white">
      <h1 className="text-5xl">Hola!🫡</h1>
      <p className="text-4xl uppercase font-bold mt-3 bg-gradient-to-r from-blue-500 to-violet-800 mix-blend-normal bg-clip-text text-transparent">
        Bienvenido a mi Portfolio
      </p>
      <h3 className="text-3xl mt-3">
        Soy <b className="underline decoration-blue-400">Ezequiel</b>,
        desarrollador Frontend
      </h3>
      <div className="flex justify-center self-center gap-10 mt-20 pointer-events-auto w-fit">
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
