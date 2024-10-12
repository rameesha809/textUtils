import React, { useState } from 'react'
export default function Textform(props) {
    const [text,setText] = useState("");
    const [color,setColor] = useState("black")
const handleClick =()=>{
    const newtext = text.toUpperCase()
    setText(newtext)
}
const handleColor =()=>{
    setColor("red");
    const textarea = document.querySelector("textarea");
    if (textarea) {
        textarea.style.color = "red"; 
    }
}
const handleClear =()=>{
    setText("");
}
const handleChange =(e)=>{
    setText(e.target.value)
}
    return (
    <>
<div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
<h1 >{props.heading}</h1>
<textarea style={{backgroundColor: props.mode==='dark'?'#294d71':'white'}} className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
<button disabled={text.length-1===0} className="btn btn-primary mx-1 my-1" onClick={handleClick}>Convert to uppercase</button>
<button disabled={text.length-1===0} className="btn btn-primary mx-1 my-1"  onClick={handleColor}>Convert to Red color</button>
<button disabled={text.length-1===0} className="btn btn-primary mx-1 my-1"  onClick={handleClear}>Clear text</button>

</div>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
<h1>Your text summary</h1>
<p>{text.split(" ").length-1} words and {text.length} characters and takes {(text.split(" ").length-1)*0.008} minutes to read it</p>
<h2>
    Preview
</h2>
<p>
    {text.length>0?text:"Enter something to preview"}
</p>
</div>
    </>
  )
}
