import React, { useState } from "react";

function InputTypeComponent() {
  const [inputText, setInputText] = useState("");

  const setData = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <p>{inputText}</p>
      <label>
        Please Enter:
        <input type="text" value={inputText} onChange={(event) => setData(event)} />
      </label>
    </div>
  );
}

export default InputTypeComponent;