import { useEffect } from 'react'
import { useState, useCallback, useRef } from 'react'

import './App.css'

function App() {
  // password Length
  const [length, setLength] = useState(8)

  // password number and character
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [password, setPassword] = useState("")

  // Password Generator
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) str += "1234567890"
    if (charAllow) str += "!@#$%^&(){}[]?/<>`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [numberAllow, length, charAllow, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [numberAllow, charAllow, length, setPassword])

  // password 
  const passwordRef = useRef(null)

  const copypasswordToClipboard = useCallback((()=>{

      window.navigator.clipboard.writeText(password)

      document.getElementById('copyButton').innerText = "Copied"

      setTimeout(() => {
        document.getElementById('copyButton').innerText = "Copy"
      }, 3000);
  }), [password])


  return (
    <>
      <div>
        <h1 className='font-semibold text-2xl text-center text-orange-600'>Password Generator</h1>
      </div>
      <div className='flex justify-center items-center'>
        <div className='bg-slate-200 text-black rounded-xl m-8 max-w-md px-4 my-8 mx-auto w-full py-2'>
          <div className='flex shadow rounded-lg overflow-hidden md-4'>
            <input type="text" value={password} className="outline-none w-full py-1 px-3"
              placeholder='Password'
              ref={passwordRef} readOnly />

            <button 
            onClick={copypasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink- 
              0' id="copyButton">Copy</button>
          </div>

          <div className='flex text-sm gap-x-3 m-5'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
                min={6}
                max={50}
                value={length}
                className="cursor-pointer h-6"
                onChange={(e) => { setLength(e.target.value) }} />
              <label>Length : {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" 
              id="checkInput" 
              defaultChecked={numberAllow} 
              onChange={() => {
                setNumberAllow((prev) => !prev)
              }}
              onClick={passwordGenerator} />
              <label>Number</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" 
              id="checkInput" 
              defaultChecked={numberAllow} 
              onChange={() => {
                setcharAllow((prev) => !prev)
              }} 
              onClick={passwordGenerator} />
              <label>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
