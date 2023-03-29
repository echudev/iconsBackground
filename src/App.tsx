import BkgIcons from './components/BkgIcons'

const objeto1 = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 30,
  direccion: {
  }
}

function App () {
  return (
    <div>
      <header className="h-screen w-screen">
        <h1>{objeto1.nombre}</h1>
      <BkgIcons />
      </header>
    </div>
  )
}

export default App
