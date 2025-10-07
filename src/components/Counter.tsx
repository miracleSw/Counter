import { useState, useEffect } from 'react'
import './Counter.css'
import Restart from './Restart';
import Option from './Option';

function Counter() {
    const [count, setCount] = useState(0);
    const [isReset, setIsReset] = useState(false);
    const [isOption, setIsOption] = useState(false);

    const handleSetCount = (num:number) => {
        setCount((c) => c + num);
    }

    const handleSetIsOption = (value:boolean) => {
        setIsOption(value);
    }

    const handleSetIsReset = (value:boolean) => {
        setIsReset(value);
    }

    const handleResetCounter = () => {
        setCount(0);
        handleTurnBack();
    }

    const handleTurnBack = () => {
        setIsReset(false);
    }
    
    const optionFunction = () => {
        setIsOption(false);
    }; 

    const handleSetCnt = (num:number) => {
        setCount(num);
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch(e.key) {
                case "ArrowUp":
                    if(count < 999) setCount((c) => c + 1);
                    break;
                case "ArrowDown":
                    if(count > 0) setCount((c) => c - 1);
                    break;
                case "ArrowLeft":
                    if(count > 0) setCount((c) => c - 1);
                    break;
                case "ArrowRight":
                    if(count < 999) setCount((c) => c + 1);
                    break;
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [count]);

    if(isReset) {
        return <Restart resetFunction={handleResetCounter} turnBack={handleTurnBack} />;
    }

    if(isOption) {
        return <Option turnBack={optionFunction} count={count} setCount={handleSetCnt} />
    }

    return(
        <div className='counter-container'>
            <div className="menu center">
                <button>Information</button>
                <button onClick={() => handleSetIsOption(true)}>Option</button>
                <button onClick={() => handleSetIsReset(true)}>Reset</button>
            </div>
            <div className="counter center">
                <button className='count minus' disabled={count === 0} onClick={() => handleSetCount(-1)}>-</button>
                <span>{count}</span>
                <button className='count' disabled={count >= 999} onClick={() => handleSetCount(1)}>+</button>
            </div>
        </div>
    );

}

export default Counter;