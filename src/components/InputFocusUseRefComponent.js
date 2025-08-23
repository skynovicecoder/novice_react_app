import {useRef} from "react";

function InputFocus(){
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();    
    }

    return(
        <div>
            <div>
                <input type="text" ref={inputRef} placeholder="Need Focus..."></input>
            </div>
            <div>
                <button onClick={handleClick}>Click Me... To Get to Focus Input... !!!</button>
            </div>
        </div>
    );
}

export default InputFocus;