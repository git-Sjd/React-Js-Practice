import React, { useState } from 'react'

function Feedback() {
    const [selection, setSelection] = useState('')


    return (
        <>
            <div className='' style={{ textAlign: 'center', font: 'Bold', fontSize: '32px' }}>
                This is the Feedback Form :
            </div>

            <div style={{ borderColor: "lightcoral", textAlign: 'center', marginTop: "25px", marginBottom: "20px" }}>
                <select onChange={(e) => setSelection(e.target.value)}>
                    <option value={'opt1'}>Option1</option>
                    <option value={'opt2'}>Option2</option>
                    <option value={'opt3'}>Option3</option>

                </select>
                {selection === 'opt2' && (
                    <div>
                        <textarea style={{ width: "500px", height: "300px" }}></textarea>
                    </div>
                )}


            </div>
        </>

    )
}

export default Feedback
