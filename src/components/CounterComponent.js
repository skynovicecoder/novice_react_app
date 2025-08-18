import { useState } from "react";

const Counter = () =>{
const [count, setCounter] = useState(0);

const incrementCount = () =>{
    setCounter(count+1);
}

const decrementCount = () =>{
    setCounter(count-1);
}

const restCount = () =>{
    setCounter(0);
}

return(
    <div>
        <div>
            <p>
                {count}
            </p>
        </div>
    <div>
        <button onClick={() => incrementCount()}>
            Add Me "+""
        </button>
    
        <button onClick={()=>decrementCount()}>
            Remove Me "-"
        </button>
    </div>
    <div>
        <button onClick={() => restCount()}>
            Reset
        </button>
    </div>
    </div>
);

}

export default Counter;