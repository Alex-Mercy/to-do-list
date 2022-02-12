import React, { useState } from "react";

function InputArea(props) {
    
    const [InputText, setInputText] = useState();

    const handleChange = (e) => {
        setInputText(e.target.value)
      }

    return (
        <div className="form">
            <input type="text" value={InputText} onChange={handleChange} />
            <button onClick={()=> {props.addItem(InputText); setInputText("");}}>
                <span>Add</span>
            </button>
        </div>
    )

}

export default InputArea;