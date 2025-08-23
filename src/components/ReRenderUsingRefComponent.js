import { useRef, useState } from "react";

function ReRenderUseRef(){
const[count, setCount] = useState(0);
const renderCount = useRef(0);

renderCount.current += 1;  // Updates without causing re-render

return(
    <div>
    <p>
        Button Clicked:: {count} times...!!!
    </p>
    <p>
        Component Rendered :: {renderCount.current} times...!!!
    </p>
    <button onClick={()=> setCount(count+1)}>Click Me...!!!</button>
    </div>
);
}
export default ReRenderUseRef;