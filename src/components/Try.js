import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

const MyComponent = () => {

  const {text} = useTypewriter({
    words: ["Front End Developer", "Back End Developer", "Competitive Coder", "Tech Enthusiast", "Linux User", "Chai lover"],
    loop: 0,
    // onLoopDone: () => console.log(`loop completed after 3 runs.`),
  })

  return (
    <div className='App'>
      <span>{text}</span>
      <Cursor />
    </div>
  )
}

export default MyComponent