// Para que el Popup funcione, el elemento padre debe tener la clase "group relative"
// To make the Popup work, the parent element must have the "group relative" class
interface PopupProps {
  text: string
}
function Popup(props: PopupProps): JSX.Element {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 p-2 bg-gray-800 mt-2 rounded-md flex justify-center items-center 
            transform group-hover:delay-300 group-hover:opacity-100 pointer-events-none">
      <span className="text-slate-200 text-xs">{props.text}</span>
    </div>
  )
}

export default Popup
