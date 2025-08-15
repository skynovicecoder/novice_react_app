import { useEffect, useState } from "react";

function ToDoList(){
    const [textData, setTextData] = useState("");
    const [toDoList, setToDoList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    //load from localstorage on when component mount
    useEffect(()=>{
        const storedToDos = JSON.parse(localStorage.getItem("toDos")) || [];
        setToDoList(storedToDos);
        setLoaded(true);
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
    }

    const updateText = (event) =>{
        setTextData(event.target.value);
    }

    const deleteItem = (indexToDelete) =>{
        //setToDoList(toDoList => toDoList.splice(index,1));
        setToDoList((prevList) => prevList.filter((_,i)=> i!==indexToDelete));
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
            <input type="text" placeholder="Type here..." value={textData} onChange={(event)=> updateText(event)}></input>
            <button onClick={()=>updateToDoList()}>Add</button>
        </div>
        </div>

    );
}

export default ToDoList;