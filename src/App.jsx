import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import VPlayer from './components/VPlayer'
import VideoGrid from './components/VideoGrid'
import VideoCard from './components/VideoCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />

      <div className="flex justify-center" id="playerArea">
        <VPlayer url="https://www.youtube.com/watch?v=50A9wjJ40Dk" />
      </div>
      <VideoGrid />
    </div>
  )
}

export default App
