import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Content from './content';

import Beach from './Beach';

import Cards from './Cards';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  

  <Content/>

  <Beach/>

  <Cards/>
      

    </>
  )
}

export default App
