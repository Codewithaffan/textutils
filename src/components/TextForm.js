import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{console.log("uppercase was clicked"+text);
  let newText = text.toUpperCase();
  setText(newText)
}
const handleLoClick=()=>{console.log("uppercase was clicked"+text);
let newText = text.toLowerCase();
setText(newText)
}
const handleClearClick=()=>{
  console.log("Clear was clicked");
  let newText='';
  setText(newText)
}
const handleCopy=()=>{
console.log("copied");
var text = document.getElementById("myBox");
text.select();
text.setSelectionRange(0,999);
navigator.clipboard.writeText(text.value);
}
const handleOnChange=(event)=>
{
  console.log("on change");
  setText(event.target.value);

}
  const [text, setText] = useState('');
  return (
    <>
    <div className="container"style={{color:props.mode==='light'?'#042743':'white'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'#042743':'white'}} id="myBox"  rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear</button>
<button className="btn btn-primary" onClick={handleCopy}>Copy</button>


    </div>
    <div className="container "style={{color:props.mode==='light'?'#042743':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}

