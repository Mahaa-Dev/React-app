import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        //  console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        //  console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCopy = () => {

        var text = document.getElementById("myBox");
        text.select();

        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = () => {
        let newnText = text.split(/[ ]+/);
        setText(newnText.join(" "))
    }
    const handleOnChange = (event) => {
        //   console.log("Uppercase was clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //setText("New text here");
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Clear Spaces</button>
                </div>
            </div>

            <div className="container my-2">
                <h1>
                    Your Text Summary
                </h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes</p>

                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
