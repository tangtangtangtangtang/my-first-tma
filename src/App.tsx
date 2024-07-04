import { useState } from 'react'
import webapp from '@twa-dev/sdk'
import './App.css'

function App() {
  const [count] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => webapp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
      </div>
    </>
  )
}

export default App
