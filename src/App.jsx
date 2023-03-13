import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './components/Home';
import './styles/dictit.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
    </div>
  )
}

export default App
