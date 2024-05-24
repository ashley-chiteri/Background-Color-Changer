import React from 'react'
import ReactDOM from 'react-dom/client'

function Sidebar(props) {

    return (
        <div className='color-section'>
            <p>Change the Background Colors</p>
            <div className="color-container">
                <div
                    className="color--normal"
                    onClick={props.changeColor}
                ></div>
                <div
                    className="color--red"
                    onClick={props.changeColor}></div>
                <div
                    className="color--cyan"
                    onClick={props.changeColor}></div>
                <div
                    className="color--blue"
                    onClick={props.changeColor}></div>
            </div>

        </div>
    )
}

export default Sidebar