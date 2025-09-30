import { useState } from 'react'

import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Tours } from './components/Tours'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen flex flex-col'>
    <Header/>
    <Tours/>
    <Footer/>
    </div>
  )
}

export default App
