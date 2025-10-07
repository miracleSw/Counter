import './Restart.css'

function Restart(props: {resetFunction: () => void, turnBack: () => void}) {
  return (
    <div className='reset-container'>
        <h1>Reset Counter ?</h1>
        <button onClick={props.resetFunction}>Yes</button>
        <button onClick={props.turnBack}>Cancel</button>
    </div>
  )
}

export default Restart