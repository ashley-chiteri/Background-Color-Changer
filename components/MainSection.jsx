import React from 'react'
import ReactDOM from 'react-dom/client'

function Main(props) {

    return (
      <div className={props.color == "" ? 'main-section' : `main-${props.color}`}>
        <p>Main</p>
      </div>
    )
  }
  
  export default Main