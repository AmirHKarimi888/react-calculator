import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="card">
        <div className="calculator">
          <div className='input'>
            <input type="text" className='input' />
          </div>
          <div className="buttons">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>/</button>
            <br />
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>*</button>
            <br />
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
            <br />
            <button>0</button>
            <button>.</button>
            <button>=</button>
            <button>+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
