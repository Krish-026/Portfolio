import './toggleButton.scss'
function ToggleButton({setOpen }) {
  return (
    <button onClick={()=>setOpen(prev=>!prev)}>
      toggle
    </button>
  )
}

export default ToggleButton
