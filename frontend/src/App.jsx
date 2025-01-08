import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [names, setaNames] = useState([])

  useEffect(() => {
    axios.get('/api/names')
      .then((response) => {
        setaNames(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <p>names</p>
      <p>{names.length}</p>
      {
        names.map((name, index) => (
            <div key={name.index}>
              <p>{name.name}</p>
              <p>{name.age}</p>
            </div>
        ))
      }
    </>
  )
}

export default App
