import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Please Enter your text here!")

    const textChangeToUper = () => {
        //console.log("Button was clicked")
        // if (text != toUpperCase()) {
        //     let newText = text.toUpperCase();
        // } else {
        //     alert("Your text already in UperCase")
        // }
        let newText = text.toUpperCase();
        setText(newText)
    }
    const textChangeToLower = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const textHandler = (event) => {
        setText(event.target.value)

    }
    return (
        <>
            <div className='container'>

                <h1 className='mt-5'>{props.heading}</h1>
                <div className="form-group">

                    <textarea className="form-control" value={text} onChange={textHandler} id="exampleFormControlTextarea1" placeholder='Enter your text' rows="5"></textarea>

                </div>
                <button className='btn btn-primary mt-3' onClick={textChangeToUper}>Convert to Upper Case</button>
                <button className='btn btn-primary mx-3 mt-3' onClick={textChangeToLower}>Convert to Lower Case</button>


            </div>
            <div className='container'>
                <h2 className='mt-5'>Your text summary is here.</h2>
                <p>Total number of words are {text.split(' ').length} and {text.length} characters.</p>
                <p className=''>The approximate time to read the above text is : {0.008 * text.split(' ').length}</p>

                <h2 className=''>Preview of your text is : </h2>
                <p>{text}</p>

            </div>
        </>
    )
}
