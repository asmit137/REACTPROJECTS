import { useState } from 'react'


function App() {
  let [color, setColor] = useState('red');


  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: color }}>

        <div className='flex justify-center items-center'>
          <h1 className='text-black text-4xl font-bold bg-orange-600 w-80 p-3 text-center'>BG CHANGER</h1>
        </div>
        <div className='fixed flex flex-wrap bottom-11 justify-center inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 bg-slate-300 px-2 py-3 rounded-3xl'>
            <button onClick={() => setColor("red")}
              className='px-4 py-3 rounded-full outline-none font-semibold'
              style={{ backgroundColor: "red" }}>Red</button>

            <button onClick={() => setColor("yellow")}
              className='px-4 py-3 rounded-full outline-none font-semibold'
              style={{ backgroundColor: "Yellow" }}>Yellow</button>

            <button onClick={() => setColor("olive")}
              className='px-4 py-3 rounded-full outline-none font-semibold'
              style={{ backgroundColor: "Olive" }}>Olive</button>

            <button onClick={() => setColor("white")}
              className='px-4 py-3 rounded-full outline-gray-950 outline font-semibold'
              style={{ backgroundColor: "white" }}>White</button>

            <button onClick={() => setColor("blue")}
              className='px-4 py-3 rounded-full outline-none font-semibold'
              style={{ backgroundColor: "Blue" }}>Blue</button>

            <button onClick={() => setColor("skyblue")}
              className='px-4 py-3 rounded-full outline-none font-semibold'
              style={{ backgroundColor: "skyblue" }}>SkyBlue</button>


            <button onClick={() => setColor("black")}
              className='px-4 py-3 rounded-full outline-none text-white font-semibold'
              style={{ backgroundColor: "black" }}>Black</button>

            <button onClick={() => setColor("orange")}
              className='px-4 py-3 rounded-full outline-none font-semibold'
              style={{ backgroundColor: "orange" }}>Orange</button>

            <button onClick={() => setColor("grey")}
              className='px-4 py-3 rounded-full outline-none font-semibold'
              style={{ backgroundColor: "grey" }}>Grey</button>

            <button onClick={() => setColor("green")}
              className='px-4 py-3 rounded-full outline-none font-semibold'
              style={{ backgroundColor: "green" }}>Green</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
