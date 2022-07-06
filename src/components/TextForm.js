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
                <div className="container">
                    <textarea className="form-control mb-3" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
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
