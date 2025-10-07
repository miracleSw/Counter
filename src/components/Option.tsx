import React, {useState} from 'react'
import './Option.css'


function Option(props: {setCount: (num:number) => void, turnBack: () => void, count: number}) {
  const [value, setValue] = useState(props.count);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setValue(val > 999 ? 999 : val);
    props.setCount(val > 999 ? 999 : val)
  }

  return (
    <div className='option-container'>
        <div className="set-count">
            <label>Set count = </label>
            <input type="number" min={0} max={999} value={value} onChange={handleChange}/>
        </div>
        <button className='return-btn' onClick={props.turnBack}>Return</button>
    </div>
  )
}

export default Option