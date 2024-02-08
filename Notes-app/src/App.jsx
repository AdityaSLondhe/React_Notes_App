import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'semantic-ui-css/semantic.min.css';
import './App.css'
import Header from './Components/Header'
import Notes from './Components/Notes'

function App() {

  return (
    <div className='main'>
      <Header/>
      <Notes/>
    </div>
  )
}

export default App
