import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")
  const [text, setText] = useState("")

  const [colors, setColors] = useState(["red", "green", "blue"])

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("submit clicked")

    const trimmed = text.trim().toLowerCase()
    if(!trimmed) return
    if(colors.includes(trimmed)){
      console.log("already exists")
    }else{
      setColors([...colors, trimmed])
    }
    setText("")
  }

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <form
      onSubmit={handleSubmit}
      className="fixed top-6 inset-x-0 flex justify-center gap-2 px-4"
      >
       <input 
       type="text"
       value={text}
       onChange={(e) => setText(e.target.value)}
       className="w-full max-w-xs
            px-4 py-2
            rounded-lg shadow-md
            border border-gray-300
            text-gray-800
            bg-white
            focus:outline-none focus:ring-2 focus:ring-blue-400"
       />

       <button
          type="submit"
          className="
            px-4 py-2
            rounded-lg
            bg-blue-600 text-white
            shadow-md
            hover:bg-blue-700
            focus:outline-none focus:ring-2 focus:ring-blue-400
          "
        >
          Submit
        </button>
      </form>



      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          {colors.map((colorName) => {
            return (<button
            key={colorName}
            onClick={() => setColor(colorName)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: colorName}}
            >
              {colorName}
            </button>)
          })} 
        
        </div>
      </div>
    </div>
  )
}

export default App