import { useMemo, useState} from "react";

function UseMemoFunction() {

    const[count, setCount] = useState(0);
    const[other, setOther] = useState(0);

    const expensiveValue = useMemo(() => {
        console.log("Expensive calculation running...");
        return count*2;
    },[count]);

    return(
        <div>
            <div>
            <p>
                Count:: {count}
            </p>
            <p>
                Other:: {other}
            </p>
            <p>
                Expensive Value:: {expensiveValue}
            </p>
            </div>
            <div>
            <button onClick={()=>setCount(count+1)}>Add Count...</button>
            </div>
            <div>
                <button onClick={()=> setOther(other+1)}>Add Other...</button>
            </div>
        </div>
    );
}

export default UseMemoFunction;