import { useEffect, useState, useRef } from "react";

function ToDoList(){
    const [textData, setTextData] = useState("");
    const [toDoList, setToDoList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const inputRef = useRef(null);

    //load from localstorage on when component mount
    useEffect(()=>{
        const storedToDos = JSON.parse(localStorage.getItem("toDos")) || [];
        setToDoList(storedToDos);
        setLoaded(true);
        inputRef.current?.focus();  //UserREF + Focus tpgether used for dom component focus
    },[]);

    //To save to the localstorage
    useEffect(()=>{
        if(loaded){
        localStorage.setItem("toDos", JSON.stringify(toDoList));
        }
    }, [toDoList, loaded]);

    const updateToDoList = () => {
        if(textData===undefined || textData===null || textData.trim()==="") return;
        if(toDoList.indexOf(textData.trim())!==-1) return;
        setToDoList(toDoList => [...toDoList, textData]);
        //setToDoList(toDoList.push(textData));
        setTextData("");
        inputRef.current?.focus();
    }

    const updateText = (event) =>{
        setTextData(event.target.value);
    }

    const deleteItem = (indexToDelete) =>{
        //setToDoList(toDoList => toDoList.splice(index,1));
        setToDoList((prevList) => prevList.filter((_,i)=> i!==indexToDelete));
         inputRef.current?.focus(); 
    }

    const handleInputTypeKey = (e) => {
        if(e.key==="Enter"){
            updateToDoList();
        }
    }

    return(
        <div>
        <div>
            <label>To Do List:</label>
            <ul>
                {
                toDoList.map((data, index) =>(
                    <li key={index}>{data} <button onClick={()=> deleteItem(index)}>Delete</button></li>
                ))
             }
            </ul>
        </div>
        <div>
            <input ref={inputRef} type="text" placeholder="Type here..." onKeyDown={(e)=> handleInputTypeKey(e)} value={textData} onChange={(event)=> updateText(event)}></input>
            <button onClick={()=>updateToDoList()}>Add</button>
        </div>
        </div>

    );
}

export default ToDoList;