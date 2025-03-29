import { useState } from 'react'
import SpeakerSessionRSVP from './pages/SpeakerSessionRSVP'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SpeakerSessionRSVP />
    </>
  )
}

export default App
